require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember company grace high sun vendor'; 
let testAccounts = [
"0xffc71514021d5ff36869aa3902c4ceec5b702ee7c13fc580908b44792729ec94",
"0x76c66ba0c179dd70fca372950870f0615abefddf7d17f20ffc3cb30d9cfabc3c",
"0x9bb426e28ec1cd37eff0f8388c9bf10d09d2e517b57c8a64eee4ae1b50bd13bb",
"0x10e753c85c71b838d8567ec8248a27facbc32a653abf8abbd215323646fa6a15",
"0x8f853751fd3733ad7fe7efd7a0b3128f1e41ae32590e50e5b045db20a5681dab",
"0x6fe9c65ba8e09adb30e84bfa6b07d157eb85dabd92c2e6f3f0e2b1c601d39739",
"0xc0d94f39dc27efc33b142325bb4e4c71b33c60ce48156c17311957853fe25140",
"0x9dd15c1ecba9548ce3801e20c7cd78ee52515c47bb1fc96959c55f3cd333da32",
"0xe0539d9bb0380d5a97da2052bded8c0f65e066f9b9b454bbfb640050bd630e53",
"0xfc2998f07bb869edaf6dd4224868c3e8162ff940a697466d58674b7bc31b4bb4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

