Decentralized Lottery System
This project implements a decentralized lottery system using blockchain technology. It features a smart contract written in Solidity and a frontend built with HTML, TailwindCSS, AnimeJS, and Ethers.js. The system supports two interfaces: one for users to buy tickets and view lottery details, and another for the admin to manage the lottery (trigger draws, distribute prizes, and reset the lottery).
Features

Smart Contract: Manages lottery logic, including ticket purchases, winner selection, and prize distribution.
User Interface: Allows users to connect their wallet, buy tickets, and view lottery details.
Admin Interface: Allows the admin to trigger draws, distribute prizes, and reset the lottery.
Animations: Uses AnimeJS for visual feedback on actions like ticket purchases and draw triggers.

Prerequisites
Before starting, ensure you have the following installed:

Node.js and npm: For Hardhat and JavaScript dependencies. Download here.
MetaMask: Browser extension for wallet interaction. Install here.
Alchemy or Infura Account: For testnet access. Sign up at Alchemy or Infura to get an API key.
Sepolia Test ETH: Obtain test ETH from a faucet like Sepolia Faucet.

Project Setup
Follow these steps after downloading the code from GitHub to set up, deploy, and interact with the decentralized lottery system.
Step 1: Clone the Repository
Assuming you've downloaded the code, navigate to the project directory:
cd decentralized-lottery

Step 2: Install Dependencies
Install the required Node.js packages for Hardhat and frontend development:
npm install

This installs dependencies like Hardhat, Ethers.js, and http-server.
Step 3: Configure Environment Variables
Create a .env file in the root directory to store your API key and private key. Add the following content:
SEPOLIA_API_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY
PRIVATE_KEY=YOUR_METAMASK_PRIVATE_KEY


Replace YOUR_ALCHEMY_API_KEY with your Alchemy or Infura API key.
Replace YOUR_METAMASK_PRIVATE_KEY with your MetaMask wallet’s private key (export it securely and never share it).

Step 4: Compile the Smart Contract
Compile the Lottery.sol smart contract to generate the ABI and bytecode:
npx hardhat compile

This creates contract artifacts in the artifacts/ directory.
Step 5: Deploy the Smart Contract
Deploy the contract to the Sepolia testnet using the provided deployment script:
npx hardhat run scripts/deploy.js --network sepolia


The contract deploys with a ticket price of 0.0001 ETH.
After deployment, note the contract address printed in the console (e.g., Lottery deployed to: 0x123...abc).

Step 6: Update the Frontend with the Contract Address
Modify the frontend/lottery.js file to include the deployed contract address. Open the file and update the contractAddress variable:
const contractAddress = "0x123...abc"; // Replace with your deployed contract address


Replace "0x123...abc" with the actual address from Step 5.
Save the file.

Step 7: Serve the Frontend
Start a local server to host the frontend files:
npx http-server


The server runs on http://127.0.0.1:8080 by default.
Access the user interface at http://127.0.0.1:8080/frontend/user.html.
Access the admin interface at http://127.0.0.1:8080/frontend/admin.html.

Step 8: Interact with the Application
User Interface

Open http://127.0.0.1:8080/frontend/user.html in a browser with MetaMask installed.
Connect your MetaMask wallet:
Ensure it’s set to the Sepolia testnet.
Click "Connect Wallet" on the page.


Buy tickets:
Click "Buy Ticket" (costs 0.0001 ETH per ticket).
Confirm the transaction in MetaMask.


View lottery details:
Check the prize pool and winner (updated after a draw).



Admin Interface

Open http://127.0.0.1:8080/frontend/admin.html using the admin wallet (the one used to deploy the contract).
Connect your MetaMask wallet (set to Sepolia testnet).
Trigger the draw:
Click "Trigger Draw" to randomly select a winner.
Confirm the transaction.


Distribute the prize:
Click "Distribute Prize" to send the prize pool to the winner.
Confirm the transaction.


Reset the lottery:
Click "Reset Lottery" to start a new round.
Confirm the transaction.



Troubleshooting

MetaMask Connection Issues: Ensure MetaMask is installed, unlocked, and on the Sepolia testnet. Check the browser console for errors.
Contract Interaction Errors: Verify the contractAddress in lottery.js matches the deployed address. Ensure your wallet has enough test ETH.
Server Issues: If http-server fails, ensure port 8080 is free or specify a different port (e.g., npx http-server -p 3000).

This guide covers all steps and code changes needed to get the decentralized lottery system running after downloading the code from GitHub.
