import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeihzee6e6xfncnbrpikzfd32kcqoowj3m7tdx742upgw75avdugmta", // HTML blog example
    nftId: [
      "0xf6491a430f212762f6612f94fcf1f2d9aadabe1fc3bb4b42a8aaa2998adce25a",
    ], // You need to own 'Salvations Edge' to unlock this.
  },
];

export { unlockables };
