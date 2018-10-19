This repository stores configuration settings behind a minimum viable game. These settings are implemented as an interface that can be exported/imported to your game. This approach ensures that the code is edited at a single point and later reused whenever you may need it.
See the [IConfig.ts](https://github.com/DaoCasino/dc-monorepo/blob/development/packages/dc-configs/src/interfaces/IConfig.ts) file for the source code.

## Global DAO.Casino Variables
|   Variable   |Description      |Type |
| ---- | ---- | ---- |
|process.env.DC_NETWORK |  Blockchain network, e.g. Ropsten, local. Supported networks are specified in [blockchainnetworks.ts](https://github.com/DaoCasino/dc-monorepo/blob/development/packages/dc-configs/src/blockchainNetworks.ts)    |String|
|process.env.PLATFORM_ID     |      Platform ID |String|
|process.env.GAS_PRICE   |      |Numeric|
|process.env.GAS_LIMIT   |      |Numeric|
|process.env.PWD |      ||
|process.env.HOST   |  default is  0.0.0.0 (any local IP)    | Alphanumeric, IP|
|process.env.NODE_ENV|Node name (Node.js)|String (e.g., dev or production)|
|process.env.BABEL_ENV|Compiler environment for React| String (e.g., dev or production)|
|process.env.PORT, 10|default port|e.g. 3000 for ppp|
|process.env.CI|||
|process.env.ACCOUNT_PRIVATE_KEY|Bankroller account private key||
|process.env.PUBLIC_URL|URL for game access|URL|
|process.env.GRAYLOG_HOST|Host and port for logging|`Host:URL, PORT:port_number` or function calling antoher variable (e.g. process.evn.HOST and a dedicated port for logging)|

