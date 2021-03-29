const ethers = require('ethers');

const provider = ethers.getDefaultProvider('ropsten', {
  alchemy: 'https://eth-ropsten.alchemyapi.io/v2/1mMc5sLfQ37L_Lw6WLBy9oZ4sGE9u86G'
})

module.exports = provider