// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PRATI_NFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private tokenIdCounter;

    string private prompt = "Different TV Cartoon star playing cricket with bat and ball";
    mapping(uint256 => string) private tokenURIs;
    

    address private Owner;

    constructor( string memory name, string memory symbol) ERC721(name, symbol) {
        
        Owner = msg.sender;
    }

    function promptDescription() public view returns (string memory) {
        return prompt;
    }

    function tokenURI( uint256 tokenId ) public view override returns (string memory) {
        require(
            _exists(tokenId),
            "The given token id is not present"
        );
        return tokenURIs[tokenId];
    }

    function mintNFT(  address recipient,   string memory _tokenURI  ) public returns (uint256) {
        require(
            msg.sender == Owner,
            "Only owner can mint  the NFT"
        );

        uint256 newTokenId = tokenIdCounter.current();
        _safeMint(recipient, newTokenId);
        setTokenURI(newTokenId, _tokenURI);
        tokenIdCounter.increment();
        return newTokenId;
    }

    function setTokenURI(  uint256 tokenId, string memory _tokenURI) internal virtual {
        require(
            _exists(tokenId),
            "the given token id is not present"
        );
        tokenURIs[tokenId] = _tokenURI;
    }

    function batchMint(
        address recipient,
        string[] memory tokenURIsArray
    ) public returns (uint256[] memory) {
    
        uint256[] memory newTokenIds = new uint256[](tokenURIsArray.length);

        for (uint256 i = 0; i < tokenURIsArray.length; i++) {
            newTokenIds[i] = mintNFT(recipient, tokenURIsArray[i]);
        }

        return newTokenIds;
    }
}
