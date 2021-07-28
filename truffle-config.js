const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require("web3");
const mnemonic = 'Amphibious Witches Relished Sour Bacon Wholeheartedly However Mosquitoes Circulated Invisible Skirts Boorishly';



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

    rinkeby: {
      provider: new HDWalletProvider(
        mnemonic,
        'https://rinkeby.infura.io/v3/1ee87164e7b1448daed738352cb48e5d',
        0,
        1
      ),
      network_id: 4, // rinkeby
      skipDryRun: true
    }
  },

};