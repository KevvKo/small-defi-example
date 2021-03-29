const ethers = require('ethers');
const wallet = require('./wallet');
const provider = require('./provider');

async function main(){
  const account = wallet.connect(provider)

  const usdc = new ethers.Contract(
    "0x68ec573C119826db2eaEA1Efbfc2970cDaC869c4",
    [
      "function balanceOf(address _owner) public view returns (uint256 balance)",
    ],
    account
  );

  const ethBalance = await account.getBalance();
  console.log(`ETH Balance: ${ethers.utils.formatEther(ethBalance, 18)}`)

  const usdcBalance = await usdc.balanceOf(account.address)
  console.log(`USDC Balance: ${ethers.utils.formatUnits(usdcBalance, 6)}` )
}

main()