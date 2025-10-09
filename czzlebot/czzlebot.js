// Toggle & Close
const chatToggle = document.getElementById("chat-toggle");
const chatbotContainer = document.getElementById("chatbot-container");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

chatToggle.addEventListener("click", () => {
  chatbotContainer.style.display = "flex";
  chatToggle.style.display = "none";
});

closeChat.addEventListener("click", () => {
  chatbotContainer.style.display = "none";
  chatToggle.style.display = "block";
});

// Local knowledge base
const knowledge = {
  "cell": "A cell is the basic structural and functional unit of all living organisms.",
  "photosynthesis": "Photosynthesis is the process by which plants make food using sunlight and CO₂.",
  "respiration": "Respiration is the breakdown of food to release energy.",
  "mitosis": "Mitosis produces two identical cells from one parent cell.",
  "dna": "DNA carries genetic instructions in living things."
};

// Chat display
function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add(sender === "user" ? "user-msg" : "ai-msg");
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Bot response
function getBotResponse(message) {
  const lower = message.toLowerCase();
  for (let key in knowledge) {
    if (lower.includes(key)) {
      return knowledge[key];
    }
  }
  return "Hmm... I’m not sure about that yet. Try asking about cells, DNA, or photosynthesis!";
}

sendBtn.addEventListener("click", () => {
  const msg = userInput.value.trim();
  if (!msg) return;

  appendMessage("user", msg);
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotResponse(msg);
    appendMessage("ai", reply);
  }, 600);
});
