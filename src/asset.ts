import { ERC20AssetFactory, ERC20AssetFactory__factory } from "./interfaces";
import { ethers, BigNumber, BigNumberish, Signer, utils, ContractTransaction } from "ethers";

export interface AssetFactoryInterface {
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
                    assetAddress = event.args["contractAddress"];
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
