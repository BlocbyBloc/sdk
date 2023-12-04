/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20AssetFactory,
  ERC20AssetFactoryInterface,
} from "../ERC20AssetFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "AssetInitialization",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAssets",
    outputs: [
      {
        internalType: "contract ERC20Asset[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b50604051620024b7380380620024b7833981810160405281019061003391906101d9565b805f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a4575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161009b9190610213565b60405180910390fd5b6100b3816100ba60201b60201c565b505061022c565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101a88261017f565b9050919050565b6101b88161019e565b81146101c2575f80fd5b50565b5f815190506101d3816101af565b92915050565b5f602082840312156101ee576101ed61017b565b5b5f6101fb848285016101c5565b91505092915050565b61020d8161019e565b82525050565b5f6020820190506102265f830184610204565b92915050565b61227d806200023a5f395ff3fe608060405234801562000010575f80fd5b50600436106200005c575f3560e01c806367e4ac2c1462000060578063715018a614620000825780638da5cb5b146200008e578063f0beed2114620000b0578063f2fde38b14620000d0575b5f80fd5b6200006a620000f0565b6040516200007991906200060e565b60405180910390f35b6200008c6200017d565b005b6200009862000194565b604051620000a7919062000654565b60405180910390f35b620000ce6004803603810190620000c89190620006e1565b620001bb565b005b620000ee6004803603810190620000e891906200079b565b620002e1565b005b606060018054806020026020016040519081016040528092919081815260200182805480156200017357602002820191905f5260205f20905b815f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831162000129575b5050505050905090565b620001876200036c565b620001925f620003fc565b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b620001c56200036c565b5f3385858585604051620001d990620004c4565b620001e99594939291906200082b565b604051809103905ff08015801562000203573d5f803e3d5ffd5b509050600181908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828260405162000278929190620008aa565b60405180910390203373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f87fc90542157be45886b1e4c6de42cd636234fc9e9fd786e9ce963dc53720cc160405160405180910390a45050505050565b620002eb6200036c565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200035e575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040162000355919062000654565b60405180910390fd5b6200036981620003fc565b50565b62000376620004bd565b73ffffffffffffffffffffffffffffffffffffffff166200039662000194565b73ffffffffffffffffffffffffffffffffffffffff1614620003fa57620003bc620004bd565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401620003f1919062000654565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b61198380620008c583390190565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f620005436200053d6200053784620004fb565b6200051a565b620004fb565b9050919050565b5f620005568262000523565b9050919050565b5f62000569826200054a565b9050919050565b6200057b816200055d565b82525050565b5f6200058e838362000570565b60208301905092915050565b5f602082019050919050565b5f620005b282620004d2565b620005be8185620004dc565b9350620005cb83620004ec565b805f5b8381101562000601578151620005e5888262000581565b9750620005f2836200059a565b925050600181019050620005ce565b5085935050505092915050565b5f6020820190508181035f830152620006288184620005a6565b905092915050565b5f6200063c82620004fb565b9050919050565b6200064e8162000630565b82525050565b5f602082019050620006695f83018462000643565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f8083601f8401126200069b576200069a62000677565b5b8235905067ffffffffffffffff811115620006bb57620006ba6200067b565b5b602083019150836001820283011115620006da57620006d96200067f565b5b9250929050565b5f805f8060408587031215620006fc57620006fb6200066f565b5b5f85013567ffffffffffffffff8111156200071c576200071b62000673565b5b6200072a8782880162000683565b9450945050602085013567ffffffffffffffff81111562000750576200074f62000673565b5b6200075e8782880162000683565b925092505092959194509250565b620007778162000630565b811462000782575f80fd5b50565b5f8135905062000795816200076c565b92915050565b5f60208284031215620007b357620007b26200066f565b5b5f620007c28482850162000785565b91505092915050565b5f82825260208201905092915050565b828183375f83830152505050565b5f601f19601f8301169050919050565b5f620008068385620007cb565b935062000815838584620007db565b6200082083620007e9565b840190509392505050565b5f606082019050620008405f83018862000643565b818103602083015262000855818688620007f9565b905081810360408301526200086c818486620007f9565b90509695505050505050565b5f81905092915050565b5f6200088f838562000878565b93506200089e838584620007db565b82840190509392505050565b5f620008b882848662000882565b9150819050939250505056fe608060405234801562000010575f80fd5b506040516200198338038062001983833981810160405281019062000036919062000396565b82828281600390816200004a919062000664565b5080600490816200005c919062000664565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000d2575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000c9919062000759565b60405180910390fd5b620000e381620000ed60201b60201c565b5050505062000774565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620001ec82620001c1565b9050919050565b620001fe81620001e0565b811462000209575f80fd5b50565b5f815190506200021c81620001f3565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b62000272826200022a565b810181811067ffffffffffffffff821117156200029457620002936200023a565b5b80604052505050565b5f620002a8620001b0565b9050620002b6828262000267565b919050565b5f67ffffffffffffffff821115620002d857620002d76200023a565b5b620002e3826200022a565b9050602081019050919050565b5f5b838110156200030f578082015181840152602081019050620002f2565b5f8484015250505050565b5f620003306200032a84620002bb565b6200029d565b9050828152602081018484840111156200034f576200034e62000226565b5b6200035c848285620002f0565b509392505050565b5f82601f8301126200037b576200037a62000222565b5b81516200038d8482602086016200031a565b91505092915050565b5f805f60608486031215620003b057620003af620001b9565b5b5f620003bf868287016200020c565b935050602084015167ffffffffffffffff811115620003e357620003e2620001bd565b5b620003f18682870162000364565b925050604084015167ffffffffffffffff811115620004155762000414620001bd565b5b620004238682870162000364565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200047c57607f821691505b60208210810362000492576200049162000437565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620004f67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004b9565b620005028683620004b9565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6200054c6200054662000540846200051a565b62000523565b6200051a565b9050919050565b5f819050919050565b62000567836200052c565b6200057f620005768262000553565b848454620004c5565b825550505050565b5f90565b6200059562000587565b620005a28184846200055c565b505050565b5b81811015620005c957620005bd5f826200058b565b600181019050620005a8565b5050565b601f8211156200061857620005e28162000498565b620005ed84620004aa565b81016020851015620005fd578190505b620006156200060c85620004aa565b830182620005a7565b50505b505050565b5f82821c905092915050565b5f6200063a5f19846008026200061d565b1980831691505092915050565b5f62000654838362000629565b9150826002028217905092915050565b6200066f826200042d565b67ffffffffffffffff8111156200068b576200068a6200023a565b5b62000697825462000464565b620006a4828285620005cd565b5f60209050601f831160018114620006da575f8415620006c5578287015190505b620006d1858262000647565b86555062000740565b601f198416620006ea8662000498565b5f5b828110156200071357848901518255600182019150602085019450602081019050620006ec565b868310156200073357848901516200072f601f89168262000629565b8355505b6001600288020188555050505b505050505050565b6200075381620001e0565b82525050565b5f6020820190506200076e5f83018462000748565b92915050565b61120180620007825f395ff3fe608060405234801561000f575f80fd5b50600436106100e8575f3560e01c8063715018a61161008a5780639dc29fac116100645780639dc29fac14610238578063a9059cbb14610254578063dd62ed3e14610284578063f2fde38b146102b4576100e8565b8063715018a6146101f25780638da5cb5b146101fc57806395d89b411461021a576100e8565b806323b872dd116100c657806323b872dd14610158578063313ce5671461018857806340c10f19146101a657806370a08231146101c2576100e8565b806306fdde03146100ec578063095ea7b31461010a57806318160ddd1461013a575b5f80fd5b6100f46102d0565b6040516101019190610e7a565b60405180910390f35b610124600480360381019061011f9190610f2b565b610360565b6040516101319190610f83565b60405180910390f35b610142610382565b60405161014f9190610fab565b60405180910390f35b610172600480360381019061016d9190610fc4565b61038b565b60405161017f9190610f83565b60405180910390f35b6101906103b9565b60405161019d919061102f565b60405180910390f35b6101c060048036038101906101bb9190610f2b565b6103c1565b005b6101dc60048036038101906101d79190611048565b6103d7565b6040516101e99190610fab565b60405180910390f35b6101fa61041c565b005b61020461042f565b6040516102119190611082565b60405180910390f35b610222610457565b60405161022f9190610e7a565b60405180910390f35b610252600480360381019061024d9190610f2b565b6104e7565b005b61026e60048036038101906102699190610f2b565b6104fd565b60405161027b9190610f83565b60405180910390f35b61029e6004803603810190610299919061109b565b61051f565b6040516102ab9190610fab565b60405180910390f35b6102ce60048036038101906102c99190611048565b6105a1565b005b6060600380546102df90611106565b80601f016020809104026020016040519081016040528092919081815260200182805461030b90611106565b80156103565780601f1061032d57610100808354040283529160200191610356565b820191905f5260205f20905b81548152906001019060200180831161033957829003601f168201915b5050505050905090565b5f8061036a610625565b905061037781858561062c565b600191505092915050565b5f600254905090565b5f80610395610625565b90506103a285828561063e565b6103ad8585856106d0565b60019150509392505050565b5f6012905090565b6103c96107c0565b6103d38282610847565b5050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6104246107c0565b61042d5f6108c6565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461046690611106565b80601f016020809104026020016040519081016040528092919081815260200182805461049290611106565b80156104dd5780601f106104b4576101008083540402835291602001916104dd565b820191905f5260205f20905b8154815290600101906020018083116104c057829003601f168201915b5050505050905090565b6104ef6107c0565b6104f98282610989565b5050565b5f80610507610625565b90506105148185856106d0565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b6105a96107c0565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610619575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016106109190611082565b60405180910390fd5b610622816108c6565b50565b5f33905090565b6106398383836001610a08565b505050565b5f610649848461051f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106ca57818110156106bb578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016106b293929190611136565b60405180910390fd5b6106c984848484035f610a08565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610740575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107379190611082565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107b0575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107a79190611082565b60405180910390fd5b6107bb838383610bd7565b505050565b6107c8610625565b73ffffffffffffffffffffffffffffffffffffffff166107e661042f565b73ffffffffffffffffffffffffffffffffffffffff161461084557610809610625565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161083c9190611082565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108b7575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016108ae9190611082565b60405180910390fd5b6108c25f8383610bd7565b5050565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109f9575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016109f09190611082565b60405180910390fd5b610a04825f83610bd7565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610a78575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610a6f9190611082565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ae8575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610adf9190611082565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610bd1578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610bc89190610fab565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c27578060025f828254610c1b9190611198565b92505081905550610cf5565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610cb0578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610ca793929190611136565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d3c578060025f8282540392505081905550610d86565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610de39190610fab565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610e27578082015181840152602081019050610e0c565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610e4c82610df0565b610e568185610dfa565b9350610e66818560208601610e0a565b610e6f81610e32565b840191505092915050565b5f6020820190508181035f830152610e928184610e42565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610ec782610e9e565b9050919050565b610ed781610ebd565b8114610ee1575f80fd5b50565b5f81359050610ef281610ece565b92915050565b5f819050919050565b610f0a81610ef8565b8114610f14575f80fd5b50565b5f81359050610f2581610f01565b92915050565b5f8060408385031215610f4157610f40610e9a565b5b5f610f4e85828601610ee4565b9250506020610f5f85828601610f17565b9150509250929050565b5f8115159050919050565b610f7d81610f69565b82525050565b5f602082019050610f965f830184610f74565b92915050565b610fa581610ef8565b82525050565b5f602082019050610fbe5f830184610f9c565b92915050565b5f805f60608486031215610fdb57610fda610e9a565b5b5f610fe886828701610ee4565b9350506020610ff986828701610ee4565b925050604061100a86828701610f17565b9150509250925092565b5f60ff82169050919050565b61102981611014565b82525050565b5f6020820190506110425f830184611020565b92915050565b5f6020828403121561105d5761105c610e9a565b5b5f61106a84828501610ee4565b91505092915050565b61107c81610ebd565b82525050565b5f6020820190506110955f830184611073565b92915050565b5f80604083850312156110b1576110b0610e9a565b5b5f6110be85828601610ee4565b92505060206110cf85828601610ee4565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061111d57607f821691505b6020821081036111305761112f6110d9565b5b50919050565b5f6060820190506111495f830186611073565b6111566020830185610f9c565b6111636040830184610f9c565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6111a282610ef8565b91506111ad83610ef8565b92508282019050808211156111c5576111c461116b565b5b9291505056fea2646970667358221220d1372a54a8eb10b4c42274a2bba573a8d15f95703f5e058dd411f0a73edfb40564736f6c63430008140033a2646970667358221220894b776e6ae9113e2349380f240cd790197be389cf1e59eaf2cf8dbe0247464a64736f6c63430008140033";

type ERC20AssetFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20AssetFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20AssetFactory__factory extends ContractFactory {
  constructor(...args: ERC20AssetFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ERC20AssetFactory> {
    return super.deploy(
      initialOwner,
      overrides || {}
    ) as Promise<ERC20AssetFactory>;
  }
  override getDeployTransaction(
    initialOwner: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override attach(address: string): ERC20AssetFactory {
    return super.attach(address) as ERC20AssetFactory;
  }
  override connect(signer: Signer): ERC20AssetFactory__factory {
    return super.connect(signer) as ERC20AssetFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20AssetFactoryInterface {
    return new utils.Interface(_abi) as ERC20AssetFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20AssetFactory {
    return new Contract(address, _abi, signerOrProvider) as ERC20AssetFactory;
  }
}
