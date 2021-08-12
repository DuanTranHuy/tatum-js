export const abi = [
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155BatchReceived',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'tokenAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'contractType',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'transfer',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address[]',
                'name': 'tokenAddress',
                'type': 'address[]'
            },
            {
                'internalType': 'uint256[]',
                'name': 'contractType',
                'type': 'uint256[]'
            },
            {
                'internalType': 'address[]',
                'name': 'recipient',
                'type': 'address[]'
            },
            {
                'internalType': 'uint256[]',
                'name': 'amount',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': 'tokenId',
                'type': 'uint256[]'
            }
        ],
        'name': 'transferBatch',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
];
export const bytecode = '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b610d438061007d6000396000f3fe6080604052600436106100745760003560e01c8063bc197c811161004e578063bc197c81146100d5578063f23a6e6114610102578063f2881e2114610122578063f2fde38b146101355761007b565b8063715018a6146100805780638da5cb5b14610097578063966f197c146100c25761007b565b3661007b57005b600080fd5b34801561008c57600080fd5b50610095610155565b005b3480156100a357600080fd5b506100ac6101e7565b6040516100b99190610b56565b60405180910390f35b6100956100d0366004610a77565b6101f6565b3480156100e157600080fd5b506100f56100f0366004610921565b610583565b6040516100b99190610bbb565b34801561010e57600080fd5b506100f561011d3660046109c7565b610594565b610095610130366004610a2a565b6105a5565b34801561014157600080fd5b50610095610150366004610900565b6106e8565b61015d6107a8565b6001600160a01b031661016e6101e7565b6001600160a01b03161461019d5760405162461bcd60e51b815260040161019490610c4d565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b835185511461020457600080fd5b835183511461021257600080fd5b815183511461022057600080fd5b805182511461022e57600080fd5b60005b855181101561057b5784818151811061025a57634e487b7160e01b600052603260045260246000fd5b6020026020010151600014156103655785818151811061028a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663a9059cbb8583815181106102c057634e487b7160e01b600052603260045260246000fd5b60200260200101518584815181106102e857634e487b7160e01b600052603260045260246000fd5b60200260200101516040518363ffffffff1660e01b815260040161030d929190610ba2565b602060405180830381600087803b15801561032757600080fd5b505af115801561033b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035f9190610b36565b50610569565b84818151811061038557634e487b7160e01b600052603260045260246000fd5b60200260200101516002141561049a578581815181106103b557634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663f242432a308684815181106103ec57634e487b7160e01b600052603260045260246000fd5b602002602001015185858151811061041457634e487b7160e01b600052603260045260246000fd5b602002602001015187868151811061043c57634e487b7160e01b600052603260045260246000fd5b60200260200101516040518563ffffffff1660e01b81526004016104639493929190610b6a565b600060405180830381600087803b15801561047d57600080fd5b505af1158015610491573d6000803e3d6000fd5b50505050610569565b8481815181106104ba57634e487b7160e01b600052603260045260246000fd5b602002602001015160031415610551578381815181106104ea57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166108fc84838151811061051e57634e487b7160e01b600052603260045260246000fd5b60200260200101519081150290604051600060405180830381858888f1935050505015801561035f573d6000803e3d6000fd5b60405162461bcd60e51b815260040161019490610bd0565b8061057381610cd0565b915050610231565b505050505050565b63bc197c8160e01b95945050505050565b63f23a6e6160e01b95945050505050565b836106305760405163a9059cbb60e01b81526001600160a01b0386169063a9059cbb906105d89086908690600401610ba2565b602060405180830381600087803b1580156105f257600080fd5b505af1158015610606573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062a9190610b36565b506106e1565b83600214156106a257604051637921219560e11b81526001600160a01b0386169063f242432a9061066b903090879086908890600401610b6a565b600060405180830381600087803b15801561068557600080fd5b505af1158015610699573d6000803e3d6000fd5b505050506106e1565b8360031415610551576040516001600160a01b0384169083156108fc029084906000818181858888f1935050505015801561062a573d6000803e3d6000fd5b5050505050565b6106f06107a8565b6001600160a01b03166107016101e7565b6001600160a01b0316146107275760405162461bcd60e51b815260040161019490610c4d565b6001600160a01b03811661074d5760405162461bcd60e51b815260040161019490610c07565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b80356001600160a01b03811681146107c357600080fd5b919050565b600082601f8301126107d8578081fd5b813560206107ed6107e883610cac565b610c82565b8281528181019085830183850287018401881015610809578586fd5b855b8581101561082e5761081c826107ac565b8452928401929084019060010161080b565b5090979650505050505050565b600082601f83011261084b578081fd5b8135602061085b6107e883610cac565b8281528181019085830183850287018401881015610877578586fd5b855b8581101561082e57813584529284019290840190600101610879565b600082601f8301126108a5578081fd5b813567ffffffffffffffff8111156108bf576108bf610cf7565b6108d2601f8201601f1916602001610c82565b8181528460208386010111156108e6578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215610911578081fd5b61091a826107ac565b9392505050565b600080600080600060a08688031215610938578081fd5b610941866107ac565b945061094f602087016107ac565b9350604086013567ffffffffffffffff8082111561096b578283fd5b61097789838a0161083b565b9450606088013591508082111561098c578283fd5b61099889838a0161083b565b935060808801359150808211156109ad578283fd5b506109ba88828901610895565b9150509295509295909350565b600080600080600060a086880312156109de578081fd5b6109e7866107ac565b94506109f5602087016107ac565b93506040860135925060608601359150608086013567ffffffffffffffff811115610a1e578182fd5b6109ba88828901610895565b600080600080600060a08688031215610a41578081fd5b610a4a866107ac565b945060208601359350610a5f604087016107ac565b94979396509394606081013594506080013592915050565b600080600080600060a08688031215610a8e578081fd5b853567ffffffffffffffff80821115610aa5578283fd5b610ab189838a016107c8565b96506020880135915080821115610ac6578283fd5b610ad289838a0161083b565b95506040880135915080821115610ae7578283fd5b610af389838a016107c8565b94506060880135915080821115610b08578283fd5b610b1489838a0161083b565b93506080880135915080821115610b29578283fd5b506109ba8882890161083b565b600060208284031215610b47578081fd5b8151801515811461091a578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160a01b03929092168252602082015260400190565b6001600160e01b031991909116815260200190565b60208082526019908201527f556e737570706f7274656420636f6e7472616374207479706500000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60405181810167ffffffffffffffff81118282101715610ca457610ca4610cf7565b604052919050565b600067ffffffffffffffff821115610cc657610cc6610cf7565b5060209081020190565b6000600019821415610cf057634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ae236d1934ebacbf7f626917d81485c9ab1b348b348cae63115778a441ccd28c64736f6c63430008000033';