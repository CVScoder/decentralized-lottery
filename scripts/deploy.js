const { ethers } = require("hardhat");

async function main() {
  // v6 top-level parseEther
  const ticketPrice = ethers.parseEther("0.0001");
  
  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(ticketPrice);

  // v6 replaces .deployed() with .waitForDeployment()
  await lottery.waitForDeployment();

  // v6 exposes the address as .target (you can still read .address too)
  console.log("Lottery deployed to:", lottery.target);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
//Lottery deployed to: 0x5E34Cf7BFf346Ae078EbC431dC89EE7D2cc7c717

// const { ethers } = require("hardhat");
// const Lottery = await ethers.getContractFactory("Lottery");
// const lottery = await Lottery.attach("0x32d223928c3f8b66C0996013BB81B05Eb25Ad11e");
// await lottery.ticketPrice();
// await (await lottery.buyTicket({ value: ethers.parseEther("0.01") })).wait();
// await lottery.getParticipants();


// PS D:\Projects\decentralized-lottery> npx hardhat console --network sepolia
// Welcome to Node.js v20.18.0.
// Type ".help" for more information.
// > const { ethers } = require("hardhat");
// undefined
// > const Lottery = await ethers.getContractFactory("Lottery");
// undefined
// > const lottery = await Lottery.attach("0x32d223928c3f8b66C0996013BB81B05Eb25Ad11e");
// undefined
// > await lottery.ticketPrice();
// 10000000000000000n
// > await (await lottery.buyTicket({ value: ethers.parseEther("0.01") })).wait();

// ContractTransactionReceipt {
//   provider: HardhatEthersProvider {
//     _hardhatProvider: LazyInitializationProviderAdapter {
//       _providerFactory: [AsyncFunction (anonymous)],
//       _emitter: [EventEmitter],
//       _initializingPromise: [Promise],
//       provider: [BackwardsCompatibilityProviderAdapter]
//     },
//     _networkName: 'sepolia',
//     _blockListeners: [],
//     _transactionHashListeners: Map(0) {},
//     _eventListeners: [],
//     _isHardhatNetworkCached: false,
//     _transactionHashPollingTimeout: undefined
//   },
//   to: '0x32d223928c3f8b66C0996013BB81B05Eb25Ad11e',
//   from: '0xB0250A9AE5Df63697973C4B9f7712872147a41b3',
//   contractAddress: null,
//   hash: '0x3f1bb9c394eeb11c6edc5108fcfc46efe535a14653197a11078c51387b5d148f',  
//   index: 75,
//   blockHash: '0x676d32f7e984fc1824d87d4da6d9582ee46a710926d2dafd64b796bf375efd0c',
//   blockNumber: 8192872,
//   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
//   gasUsed: 69928n,
//   blobGasUsed: undefined,
//   cumulativeGasUsed: 8645034n,
//   gasPrice: 50748895179n,
//   blobGasPrice: undefined,
//   type: 2,
//   status: 1,
//   root: undefined
// }
// > await (await lottery.buyTicket({ value: ethers.parseEther("0.01") })).wait();

// ContractTransactionReceipt {
//   provider: HardhatEthersProvider {
//     _hardhatProvider: LazyInitializationProviderAdapter {
//       _providerFactory: [AsyncFunction (anonymous)],
//       _emitter: [EventEmitter],
//       _initializingPromise: [Promise],
//       provider: [BackwardsCompatibilityProviderAdapter]
//     },
//     _networkName: 'sepolia',
//     _blockListeners: [],
//     _transactionHashListeners: Map(0) {},
//     _eventListeners: [],
//     _isHardhatNetworkCached: false,
//     _transactionHashPollingTimeout: undefined
//   },
//   to: '0x32d223928c3f8b66C0996013BB81B05Eb25Ad11e',
//   from: '0xB0250A9AE5Df63697973C4B9f7712872147a41b3',
//   contractAddress: null,
//   hash: '0x9e54ee1b82164f7a45f1588e98d2f6c24ef5cf640734e954f309be05215cd080',  
//   index: 62,
//   blockHash: '0xb8bdc89e94eab7d679a6a2a7560ce63474e5121bbb3ec580588cee2a86b860ac',
//   blockNumber: 8192874,
//   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
//   gasUsed: 52828n,
//   blobGasUsed: undefined,
//   cumulativeGasUsed: 9162021n,
//   gasPrice: 52093647614n,
//   blobGasPrice: undefined,
//   type: 2,
//   status: 1,
//   root: undefined
// }
// > await lottery.getParticipants();
// Result(2) [
//   '0xB0250A9AE5Df63697973C4B9f7712872147a41b3',
//   '0xB0250A9AE5Df63697973C4B9f7712872147a41b3'
// ]
// >