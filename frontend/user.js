document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const connectWalletBtn = document.getElementById("connect-wallet");
  const walletStatus = document.getElementById("wallet-status");
  const userSection = document.getElementById("user-section");
  const statusMessage = document.getElementById("status-message");
  const buyTicketBtn = document.getElementById("buy-ticket");
  const ticketPriceEl = document.getElementById("ticket-price");
  const participantsCountEl = document.getElementById("participants-count");
  const prizePoolEl = document.getElementById("prize-pool");
  const winnerEl = document.getElementById("winner");

  // Global variables
  let provider, signer, contract, userAddress;

  // Connect Wallet
  connectWalletBtn.addEventListener("click", async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        userAddress = await signer.getAddress();
        walletStatus.textContent = `Connected: ${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
        connectWalletBtn.classList.add("hidden");

        // Initialize contract (ensure contractAddress and contractABI are defined in lottery.js)
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Show user section
        userSection.classList.remove("hidden");

        // Load lottery details (ensure this function is defined in lottery.js)
        loadLotteryDetails(contract, { ticketPriceEl, participantsCountEl, prizePoolEl, winnerEl, statusMessage });
      } catch (error) {
        console.error("Error connecting wallet:", error);
        showStatus(statusMessage, `Failed to connect wallet: ${error.message}`, true);
      }
    } else {
      showStatus(statusMessage, "Please install MetaMask", true);
    }
  });

  // Buy Ticket (example, adjust as per your contract)
  buyTicketBtn.addEventListener("click", async () => {
    buyTicketBtn.disabled = true;
    buyTicketBtn.textContent = "Processing...";
    try {
      const ticketPrice = await contract.ticketPrice();
      const tx = await contract.buyTicket({ value: ticketPrice });
      await tx.wait();
      showStatus(statusMessage, "Ticket purchased successfully!");
      loadLotteryDetails(contract, { ticketPriceEl, participantsCountEl, prizePoolEl, winnerEl, statusMessage });
    } catch (error) {
      console.error("Error buying ticket:", error);
      showStatus(statusMessage, "Failed to buy ticket", true);
    } finally {
      buyTicketBtn.disabled = false;
      buyTicketBtn.textContent = "Buy Ticket";
    }
  });
});