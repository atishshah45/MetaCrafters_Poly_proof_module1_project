const hre = require("hardhat");
const { ethers } = hre;
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
require("dotenv").config();

async function main() {
  // Set up connections to network and wallet
  const networkAddress = "https://rpc.ankr.com/eth_goerli";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the signer instance
  const [signer] = await ethers.getSigners();

  // Retrieve the deployed ERC721 contract on Ethereum
  const ERC721Contract = await ethers.getContractFactory("PRATI_NFT");
  const erc721 = await ERC721Contract.attach("0x103536729cBF4880926179937a1bd62B5EDC1E4c" );
  
  // Get FXRoot contract instance
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // TokenIds to transfer
  const tokenIds = [0, 1, 2, 3, 4];

  // Approve the nfts for transfer
  const approveTx = await erc721
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  const receiver = '0x21D5A8501dA1ea22AAf1C39bB8B8C2060e627137'; 

  // Deposit the nfts to the FXRoot contracts
  for (let i = 0; i < tokenIds.length; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(erc721.address, receiver, tokenIds[i], "0x6566");

    // Wait for the deposit to be confirmed
    await depositTx.wait();
  }

  console.log("Approved and deposited to the bridge");

  // Test balanceOf
  const balance = await erc721.balanceOf(receiver);

  // Retrieve the balance of a recipient on Mumbai
  console.log(
    "Recipient balance on Mumbai : ",
    receiver,
    "is: ",
    balance.toString()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
