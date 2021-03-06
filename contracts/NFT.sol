// SPDX-License-Identifier: MIT
pragma solidity >= 0.6.0 ;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract NFT is ERC721 {
   uint public nextTokenId;
   address public admin;


   constructor() ERC721("MyNFT", "MNFT") {
   }

   function mint(address to) external {
      require(msg.sender == admin, 'only admin');
      _safeMint(to, nextTokenId);
      nextTokenId++;
   }

   function _baseURI()  internal pure override returns(string memory) {
      return 'https://stark-hamlet-90121.herokuapp.com/';
   }
}