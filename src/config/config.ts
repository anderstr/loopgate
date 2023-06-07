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
    cid: "bafybeidrs56nxsecknrybfmpilx3epscnpdpnbipgyxuhthfxjilkylhme", 
    nftId: [
      "0xf6491a430f212762f6612f94fcf1f2d9aadabe1fc3bb4b42a8aaa2998adce25a",
    ], // You need to own 'Salvations Edge' to unlock this.
  },
  {
    cid: "bafybeicousi4kw5hdhwxli5gvtmrcwm4famjgxtfgdec4xsz6tped2xwgy", 
    nftId: [
      "0xbda091453d097adf4e105718ee1d1ca9a9f1087ad5b01e1e920458021fd9aa2a",
    ], // You need to own 'Lumos Butterfly' to unlock this.
  },
  {
    cid: "bafybeih46qz57s2yh3qsf6z76r5cfd5yrrheu6vphwwh2l4tuy3nhuvqaa", 
    nftId: [
      "0xa74e06e35e3602623b1e254e6d79d2839c4297fc99c60d13d5f15bc04a599f10",
    ], // You need to own 'Crimson Butterfly' to unlock this.
  },
  {
    cid: "bafybeihhx5v3saq3b7n55ub5q3atuw2udbqc5ictkv2ih7vd3hxptu22nu", // Web game example
    nftId: [
      "0x8aa9d39f44b4b8488d0bbf04ea12bec99ddbe676a1b9a38d853701327437e78c",
      "0x3d483f631a391a3706446613929d253cfddcb47900a07593c5004c5e3827d9ee",
    ], // You need to own 'GM #1' & 'GM #2' to unlock this.
  },
];

export { unlockables };
