const { ethers } = require("hardhat");

async function main() {
  const MyNFT = await ethers.getContractFactory("PRATI_NFT");
  const myNFT = await MyNFT.attach("0x103536729cBF4880926179937a1bd62B5EDC1E4c");

  // Generate an array of recipient addresses
  const recipient = "0x21D5A8501dA1ea22AAf1C39bB8B8C2060e627137";
   
    
 

  // Generate an array of token URIs corresponding to the recipients
  const tokenURIs = [
    "ipfs://QmXLHu61w3uTAzFL6dWxqkdZkSiuHJBjmxQDPYSHbJu3tu",
    "ipfs://QmTdkn42mRJjTGedskB35MhFK5uxQLw6C38LgJM1eXRcf6",
    "ipfs://QmPvKCvmSwhSGk7Zt5k1K9MFS134yGnbPhP54V5DsErVzq",
    "ipfs://QmNz1fHTKbSC6JGb5Xsbcy4kFb9fQ9ts76ER6rk9HHoQrV",
    "ipfs://QmYWm8qMHpWs7XewsUzodijjRVtTZFDQLBdxm4pGZAqawV",
    // Add more token URIs as needed
  ];

  // Batch mint NFTs
  const batchMint = await myNFT.batchMint(recipient, tokenURIs);

  // Wait for the transaction to be mined
  await batchMint.wait();

  console.log("minting of NFTs is completed");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
