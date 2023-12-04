import { ERC20AssetFactory, ERC20AssetFactory__factory } from "./interfaces";
import { ethers, BigNumber, BigNumberish, Signer, utils, ContractTransaction } from "ethers";

export interface PropertyFactoryInterface {}

export class PropertyFactory implements PropertyFactoryInterface {
    private readonly _signer: Signer;
    private readonly _contract: ERC20AssetFactory;

    /* PUBLIC PROPERTIES */
    get address() {
        return this._contract.address;
    }

    constructor(signer: Signer, propertyFactoryAddress: string) {
        this._signer = signer;
        this._contract = ERC20AssetFactory__factory.connect(propertyFactoryAddress, signer);
        if (!this._contract.address) {
            throw new Error("Error connecting to ERC20AssetFactory contract.");
        }
    }

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
}

export interface PropertyInterface {}
