import { ABIDefinition } from './interfaces/iAbi'


export const Game: ABIDefinition[] = [
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'name': 'disputes',
    'outputs': [
      {
        'components': [
          {
            'name': 'playerNumber',
            'type': 'uint256'
          },
          {
            'name': 'randomRanges',
            'type': 'uint256[2][]'
          },
          {
            'name': 'seed',
            'type': 'bytes32'
          }
        ],
        'name': 'disputeGameData',
        'type': 'tuple'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'refererReward',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'platform',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'name': 'channels',
    'outputs': [
      {
        'name': 'state',
        'type': 'uint8'
      },
      {
        'name': 'player',
        'type': 'address'
      },
      {
        'name': 'bankroller',
        'type': 'address'
      },
      {
        'name': 'playerBalance',
        'type': 'uint256'
      },
      {
        'name': 'bankrollerBalance',
        'type': 'uint256'
      },
      {
        'name': 'totalBet',
        'type': 'uint256'
      },
      {
        'name': 'session',
        'type': 'uint256'
      },
      {
        'name': 'endBlock',
        'type': 'uint256'
      },
      {
        'name': 'RSAHash',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'components': [
          {
            'name': 'playerNumber',
            'type': 'uint256'
          },
          {
            'name': 'randomRanges',
            'type': 'uint256[2][]'
          },
          {
            'name': 'seed',
            'type': 'bytes32'
          }
        ],
        'name': '_gameData',
        'type': 'tuple'
      }
    ],
    'name': 'hashGameData',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'minBet',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'gameDevReward',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'signidice',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'engine',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'developer',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'safeTime',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'components': [
          {
            'name': 'playerNumber',
            'type': 'uint256'
          },
          {
            'name': 'randomRanges',
            'type': 'uint256[2][]'
          },
          {
            'name': 'seed',
            'type': 'bytes32'
          }
        ],
        'name': '_gameData',
        'type': 'tuple'
      },
      {
        'name': '_bets',
        'type': 'uint256[]'
      }
    ],
    'name': 'checkGameData',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'bankrollReward',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'token',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'platformReward',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': '_engine',
        'type': 'address'
      },
      {
        'name': '_token',
        'type': 'address'
      },
      {
        'name': '_platform',
        'type': 'address'
      },
      {
        'name': '_signidice',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'action',
        'type': 'string'
      },
      {
        'indexed': false,
        'name': 'id',
        'type': 'bytes32'
      }
    ],
    'name': 'logChannel',
    'type': 'event'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_id',
        'type': 'bytes32'
      },
      {
        'name': '_player',
        'type': 'address'
      },
      {
        'name': '_bankroller',
        'type': 'address'
      },
      {
        'name': '_playerBalance',
        'type': 'uint256'
      },
      {
        'name': '_bankrollerBalance',
        'type': 'uint256'
      },
      {
        'name': '_openingBlock',
        'type': 'uint256'
      },
      {
        'name': '_N',
        'type': 'bytes'
      },
      {
        'name': '_E',
        'type': 'bytes'
      },
      {
        'name': '_signature',
        'type': 'bytes'
      }
    ],
    'name': 'openChannel',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_id',
        'type': 'bytes32'
      },
      {
        'name': '_playerBalance',
        'type': 'uint256'
      },
      {
        'name': '_bankrollerBalance',
        'type': 'uint256'
      },
      {
        'name': '_totalBet',
        'type': 'uint256'
      },
      {
        'name': '_session',
        'type': 'uint256'
      },
      {
        'name': '_signature',
        'type': 'bytes'
      }
    ],
    'name': 'updateChannel',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_id',
        'type': 'bytes32'
      },
      {
        'name': '_playerBalance',
        'type': 'uint256'
      },
      {
        'name': '_bankrollerBalance',
        'type': 'uint256'
      },
      {
        'name': '_totalBet',
        'type': 'uint256'
      },
      {
        'name': '_session',
        'type': 'uint256'
      },
      {
        'name': '_sign',
        'type': 'bytes'
      }
    ],
    'name': 'closeByConsent',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_id',
        'type': 'bytes32'
      }
    ],
    'name': 'closeByTime',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_id',
        'type': 'bytes32'
      },
      {
        'name': '_session',
        'type': 'uint256'
      },
      {
        'name': '_disputeBets',
        'type': 'uint256[]'
      },
      {
        'components': [
          {
            'name': 'playerNumber',
            'type': 'uint256'
          },
          {
            'name': 'randomRanges',
            'type': 'uint256[2][]'
          },
          {
            'name': 'seed',
            'type': 'bytes32'
          }
        ],
        'name': '_gameData',
        'type': 'tuple'
      },
      {
        'name': '_signature',
        'type': 'bytes'
      }
    ],
    'name': 'openDispute',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_id',
        'type': 'bytes32'
      },
      {
        'name': '_N',
        'type': 'bytes'
      },
      {
        'name': '_E',
        'type': 'bytes'
      },
      {
        'name': '_rsaSignature',
        'type': 'bytes'
      }
    ],
    'name': 'resolveDispute',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
]


export const ERC20: ABIDefinition[] = [
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_spender',
        'type': 'address'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address'
      },
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'decimals',
    'outputs': [
      {
        'name': '',
        'type': 'uint8'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': 'balance',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'acceptOwnership',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'newOwner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      },
      {
        'name': '_spender',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'name': 'remaining',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_newOwner',
        'type': 'address'
      }
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'inputs': [],
    'payable': false,
    'type': 'constructor'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'faucet',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'tokenAddress',
        'type': 'address'
      },
      {
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferAnyERC20Token',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  }
]
