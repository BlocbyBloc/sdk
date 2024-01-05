import {
    ERC20Asset,
    ERC20AssetFactory,
    ERC20Asset__factory,
    ERC20AssetFactory__factory,
} from "./interfaces";
import { BigNumber, Signer, ContractTransaction } from "ethers";
import { Provider } from "@ethersproject/providers";

interface AssetFactoryInterface {
    readonly address: string;
    initAsset: (name: string, symbol: string) => Promise<string>;
    getAssets: () => Promise<string[]>;
}

export class AssetFactory implements AssetFactoryInterface {
    /* PRIVATE PROPERTIES */
    private readonly _signer: Signer;
    private readonly _contract: ERC20AssetFactory;

    /* PUBLIC PROPERTIES */
    get address() {
        return this._contract.address;
    }

    /**
     * @param signer Signer to use to deploy market
     * @param assetFactoryAddress Address of the deployed ERC20AssetFactory contract
     */
    constructor(signer: Signer, assetFactoryAddress: string) {
        this._signer = signer;
        this._contract = ERC20AssetFactory__factory.connect(assetFactoryAddress, signer);
        if (!this._contract.address) {
            throw new Error("Error connecting to ERC20AssetFactory contract.");
        }
    }

    /**
     * Initializes an asset on the blockchain.
     * @param name Asset name
     * @param symbol Asset symbol
     * @returns Asset contract address
     */
    initAsset = async (name: string, symbol: string): Promise<string> => {
        const tx = await this._contract.initAsset(name, symbol);
        const tr = await tx.wait(1);

        let assetAddress: string | undefined = undefined;

        tr.events &&
            tr.events.map((event) => {
                if (event.event === "AssetInitialization" && event.args != undefined) {
                    // 0 - contractAddress, 1 - owner, 2 - symbol
                    assetAddress = event.args[0];
                }
            });

        if (assetAddress !== undefined) {
            return assetAddress;
        } else {
            console.error(JSON.stringify(tr, null, 2));
            throw new Error("No AssetInitialization Event fired. Please check the TR above");
        }
    };

    /**
     * Returns list of all created assets by factory
     * @returns string[] addresses
     */
    getAssets = async (): Promise<string[]> => {
        const assetAddresses = await this._contract.getAssets();
        return assetAddresses;
    };
}

interface AssetClientInterface {
    readonly address: string;
    name: () => Promise<string>;
    symbol: () => Promise<string>;
    balanceOf: (address: string) => Promise<BigNumber>;
    totalSupply: () => Promise<BigNumber>;
}

export class AssetClient implements AssetClientInterface {
    /* PRIVATE PROPERTIES */
    protected readonly _signerOrProvider: Signer | Provider;
    protected readonly _contract: ERC20Asset;

    /* PUBLIC PROPERTIES */
    get address() {
        return this._contract.address;
    }

    /**
     * @param signerOrProvider Signer or Provider of client wallet
     * @param assetAddress Address of the deployed ERC20Asset contract
     */
    constructor(signerOrProvider: Signer | Provider, assetAddress: string) {
        this._signerOrProvider = signerOrProvider;
        this._contract = ERC20Asset__factory.connect(assetAddress, signerOrProvider);
        if (!this._contract.address) {
            throw new Error("Error connecting to ERC20Asset contract.");
        }
    }

    /**
     * @returns string contract name
     */
    name = async (): Promise<string> => {
        return this._contract.name();
    };

    /**
     * @returns string contract symbol
     */
    symbol = async (): Promise<string> => {
        return this._contract.symbol();
    };

    /**
     * @param address Target wallet address
     * @returns BigNumber balance of target wallet address
     */
    balanceOf = async (address: string): Promise<BigNumber> => {
        return this._contract.balanceOf(address);
    };

    /**
     * @returns BigNumber total supply of asset tokens
     */
    totalSupply = async (): Promise<BigNumber> => {
        return this._contract.totalSupply();
    };
}

interface AssetAdminInterface extends AssetClientInterface {
    mint: (to: string, amount: BigNumber) => Promise<ContractTransaction>;
    burn: (from: string, amount: BigNumber) => Promise<ContractTransaction>;
    transferTo: (address: string, amount: BigNumber) => Promise<ContractTransaction>;
}

export class AssetAdmin extends AssetClient implements AssetAdminInterface {
    constructor(signer: Signer, assetAddress: string) {
        super(signer, assetAddress);
    }

    /**
     * Mint tokens to target address
     * @param to Target wallet address
     * @param amount BigNumber amount of tokens
     * @returns Promise<ContractTransaction>
     */
    mint = async (to: string, amount: BigNumber): Promise<ContractTransaction> => {
        return this._contract.mint(to, amount);
    };

    /**
     * Burn tokens from target address
     * @param from Target wallet address
     * @param amount BigNumber amount of tokens
     * @returns Promise<ContractTransaction>
     */
    burn = async (from: string, amount: BigNumber): Promise<ContractTransaction> => {
        return this._contract.burn(from, amount);
    };

    /**
     * Transfer tokens to target address
     * @param address Target wallet address
     * @param amount BigNumber amount of tokens
     * @returns Promise<ContractTransaction>
     */
    transferTo = async (address: string, amount: BigNumber): Promise<ContractTransaction> => {
        return this._contract.transfer(address, amount);
    };

    /**
     * Returns all holders of a particular asset
     * @returns Promise<string[]>
     */
    getHolders = async (): Promise<string[]> => {
        // adminAddress is from address
        const adminAddress = await (this._signerOrProvider as Signer).getAddress();
        const events = await this._contract.queryFilter(
            this._contract.filters["Transfer(address,address,uint256)"](adminAddress)
        );
        const holders = events.map((e) => e.args.to);
        return holders;
    };
}
