#  Building with Polygon Bridge
This project is a part of polygon advance course. In this course  we will deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge

# Description
In order to complete the project we have follow the following steps:

 ### 1) Generate a 5-item collection using stable diffusion ai image generation tool
 ### 2) Store items on IPFS using pinata.cloud
 ### 3) Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
 ### 4) You should have a promptDescription function on the contract that returns the prompt you used to generate the images
### 5) Write a hardhat script to batch mint all NFTs.
 ### 6) Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
   #### Approve the NFTs to be transferred
   #### Deposit the NFTs to the Bridge
   #### Test balanceOf on Mumbai

 # Steps to run this project
Follow the given below steps to run this project on your VS code
 ### 1) Clone the repository
 ### 2) run ***npm i*** in the terminal to install or download all the dependencies required for this project.
 ### 3) create a .env file and store the wallet private key. 
 ### 4) run ***npx hardhat run scripts/deploy.js --network goerli*** , to deploy the contract on goerli Testnet.
 ### 5) run ***npx hardhat run scripts/batchMint.js --network goerli*** , to mint the NFTs to the given address.
 ### 5) run ***npx hardhat run scripts/batchTransfer.js --network goerli*** , to perform the approve and deposit function to ploygon testnet.

 
 ## Author
 Atish Kumar Shah
