Decentralized Lottery System

A fully decentralized lottery application built with Solidity, Hardhat, and a modern JavaScript frontend using HTML, TailwindCSS, AnimeJS, and Ethers.js. It features two intuitive interfaces: one for users to participate in the lottery and another for the admin to control the system lifecycle, including drawing winners, distributing prizes, and resetting the game.


---

Features

Smart Contract: Handles ticket purchases, prize pool management, winner selection, and prize distribution.

User Interface:

Connect your MetaMask wallet.

Buy lottery tickets.

View prize pool and winner details.


Admin Interface:

Trigger random draws.

Distribute prizes.

Reset the lottery for the next round.


Smooth Animations: Enhanced UX through AnimeJS animations on actions like ticket purchases and draw results.



---

Prerequisites

Before starting, make sure the following are installed:

Node.js & npm – Required for Hardhat and frontend dependencies.

MetaMask Extension – For wallet interactions.

Alchemy / Infura – Create an account and get your Sepolia API key.

Sepolia Test ETH – Required for transactions on the testnet.



---

Project Setup

Follow these steps to clone, set up, deploy, and run the decentralized lottery system:

1. Clone the Repository

git clone https://github.com/your-username/decentralized-lottery.git
cd decentralized-lottery

2. Install Dependencies

npm install

Installs core packages like Hardhat, Ethers.js, and http-server.

3. Configure Environment Variables

Create a .env file in the root directory and add the following:

SEPOLIA_API_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY
PRIVATE_KEY=YOUR_METAMASK_PRIVATE_KEY

> Replace placeholders with your actual Alchemy/Infura API key and MetaMask private key (keep it secure and never share it).




---

4. Compile the Smart Contract

npx hardhat compile

Generates ABI and bytecode in the artifacts/ directory.

5. Deploy the Smart Contract

npx hardhat run scripts/deploy.js --network sepolia

> The console will display the contract address (e.g., Lottery deployed to: 0xABC...123). Note it down.




---

6. Update Frontend with Contract Address

In frontend/lottery.js, update the contract address:

const contractAddress = "0xABC...123"; // Replace with actual deployed address


---

7. Serve the Frontend

Start a local server:

npx http-server

User Interface: http://127.0.0.1:8080/frontend/user.html

Admin Interface: http://127.0.0.1:8080/frontend/admin.html



---

How to Use

User Interface

1. Open the user page in a MetaMask-enabled browser.


2. Connect Wallet (Sepolia testnet).


3. Buy Ticket: Click to purchase (0.0001 ETH each).


4. View Details: Check prize pool and last winner.



Admin Interface

1. Use the wallet that deployed the contract.


2. Connect to Sepolia via MetaMask.


3. Trigger Draw: Randomly picks a winner.


4. Distribute Prize: Sends ETH to the winner.


5. Reset Lottery: Prepares system for a new round.




---

Troubleshooting

MetaMask Not Connecting:

Ensure it's installed, unlocked, and set to Sepolia.

Refresh and check browser console for logs.


Contract Errors:

Confirm contractAddress is correctly updated.

Ensure wallet has sufficient Sepolia test ETH.


Server Port Conflict:

Try another port: npx http-server -p 3000.




---

Credits

This project leverages:

Solidity for smart contract logic.

Hardhat for development and deployment.

Ethers.js for blockchain interactions.

AnimeJS for smooth and responsive animations.

TailwindCSS for modern UI design.



---

License

This project is open-source and available under the MIT License.


---

Let me know if you want to include screenshots, contribution guidelines, or GitHub badges too!
