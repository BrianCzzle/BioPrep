// 🔹 CzzleBot Smarter Version

// Elements
const chatToggle = document.getElementById("chat-toggle");
const chatbotContainer = document.getElementById("chatbot-container");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Show/hide chatbot
chatToggle.addEventListener("click", () => {
  chatbotContainer.style.display = "flex";
  chatToggle.style.display = "none";
});

closeChat.addEventListener("click", () => {
  chatbotContainer.style.display = "none";
  chatToggle.style.display = "block";
});

// Knowledge Base
const knowledge = {
  "cell": "A cell is the basic structural and functional unit of all living organisms.",
  "photosynthesis": "Photosynthesis is the process by which plants make food using sunlight and CO₂.",
  "mitosis": "Mitosis produces two identical cells from one parent cell.",
  "dna": "DNA carries genetic instructions in living things.",
  "rna": "RNA is involved in coding, decoding, regulation, and expression of genes.",
  "osmosis": "Osmosis is the movement of water across a semi-permeable membrane.",
  "ecosystem": "An ecosystem is a community of living organisms interacting with their environment."
};

// Summaries
const summaries = {
  "cell": "Cells are the building blocks of life. Each cell has a nucleus, cytoplasm, and membrane, performing essential functions.",
  "photosynthesis": "Photosynthesis converts sunlight into chemical energy. Plants produce glucose and oxygen through this process.",
  "mitosis": "Mitosis is cell division where a parent cell produces two identical daughter cells.",
  "dna": "DNA stores genetic information and guides the growth, development, and reproduction of organisms.",
  "rna": "RNA plays key roles in gene expression and protein synthesis."
};

// Synonyms mapping
const synonyms = {
  "genes": "dna",
  "genetic": "dna",
  "plant food": "photosynthesis",
  "cell division": "mitosis",
  "water movement": "osmosis",
  "environment": "ecosystem"
};

// Context memory
let lastTopic = null;

// Append message to chat
function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add(sender === "user" ? "user-msg" : "ai-msg");
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Get bot response
function getBotResponse(message) {
  const lower = message.toLowerCase();

  // 1️⃣ Check knowledge base
  for (let key in knowledge) {
    if (lower.includes(key)) {
      lastTopic = key;
      return knowledge[key];
    }
  }

  // 2️⃣ Check synonyms
  for (let syn in synonyms) {
    if (lower.includes(syn)) {
      const topic = synonyms[syn];
      lastTopic = topic;
      return knowledge[topic] || "I know a little about that!";
    }
  }

  // 3️⃣ Follow-up questions
  if (lower.includes("tell me more") || lower.includes("explain further")) {
    if (lastTopic && summaries[lastTopic]) {
      return summaries[lastTopic];
    } else {
      return "Could you specify the topic you want me to explain further?";
    }
  }

  // 4️⃣ Default fallback
  return "Hmm... I’m not sure about that yet. Try asking about cells, DNA, photosynthesis, mitosis, or RNA!";
}

// Event listener for sending
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

// Optional: Enter key support
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
