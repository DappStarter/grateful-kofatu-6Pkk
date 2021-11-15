require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember hospital grid arm bubble general'; 
let testAccounts = [
"0x61d6ea15cdd6bfc1b830a78cad217713a0cd8153340f6f9c8c131a0d917f3481",
"0x111abae042b29feeb5d2df867b22faceb01014c46cc43710b0ef75566bba1f30",
"0x3e39c9e94516f117c045f08884eddd1db6434f5c022719793c2930d554662ae1",
"0xb094173ca670275fde4957144ff20945948af9e9c4840291ac3d74cea9737f3f",
"0x82e5122fe0290e838a7934aaba77a7c0df847b0c1d41066d9d19d36428b971af",
"0x73f2dec9c055a9752096bab1c6491431ae23f91f74ba4540654ce89163e7300c",
"0xf206a30aaa00bbf7c2500cda295f1532738dba59121765f6b26f32d99453f0f6",
"0xe757d3b6a8fd7dca21bfd9569dec5e397a77daa2e3013e9c9d75029561516af3",
"0xc6d4eca7b3b65d193e4f55633da6c6d25b28a9e7b731455110e1a8eae31d779e",
"0x734945a22b893a988ca9fcd6c763ee07ebcdddf56480eae1591c162596fa263e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

