const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraURL = 'wss://ropsten.infura.io/ws/v3/e1c55082430649c2bdb92cd6f7d3e3c1'

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();


module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!

  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  contracts_build_directory: './frontend/scr/contracts', // to connect to the frontend
  networks: {
    //  development: {
    //    host: "127.0.0.1",
    //    port: 7545,
    //    network_id: "*"
    //  },
    //  test: {
    //    host: "127.0.0.1",
    //    port: 7545,
    //    network_id: "*"
    //  }



    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, infuraURL),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    // rinkeby: {
    //   provider: new HDWalletProvider(
    //     mnemonic,
    //     'https://rinkeby.infura.io/v3/1ee87164e7b1448daed738352cb48e5d',
    //     0,
    //     1
    //   ),
    //   network_id: 4, // rinkeby
    //   skipDryRun: true
    // }
  },

};