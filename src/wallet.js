const ethers = require('ethers');

const mnemonic = 'helmet list habit maze muscle bus sniff intact eye multiply actor list';

const wallet = ethers.Wallet.fromMnemonic(mnemonic)

// console.log(`Mnemomin: ${wallet.mnemonic.phrase}`);
console.log(`Adress: ${wallet.address}`);

module.exports = wallet;