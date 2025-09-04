function fakeLogin(event) {
  event.preventDefault()
  alert("Login successful (demo only, by Parvinder Panwar 🚀)")
  window.location.href = "dashboard.html"
}

function fakeSignup(event) {
  event.preventDefault()
  alert("Signup successful (demo only, by Parvinder Panwar 🚀)")
  window.location.href = "dashboard.html"
}

// =======================
// AI Chatbot (demo only)
// =======================
function toggleChat() {
  const chatbot = document.getElementById("chatbot")
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex"
  if (chatbot.style.display === "flex") {
    chatbot.style.flexDirection = "column"
  }
}

function sendMessage() {
  const input = document.getElementById("user-input")
  const messages = document.getElementById("chatbot-messages")
  const userMsg = input.value.trim()
  if (!userMsg) return

  const userDiv = document.createElement("div")
  userDiv.className = "user"
  userDiv.innerText = userMsg
  messages.appendChild(userDiv)

  const botDiv = document.createElement("div")
  botDiv.className = "bot"
  botDiv.innerText = getBotReply(userMsg)
  messages.appendChild(botDiv)

  messages.scrollTop = messages.scrollHeight
  input.value = ""
}

function getBotReply(msg) {
  msg = msg.toLowerCase()
  if (msg.includes("hello") || msg.includes("hi")) return "Hello! I am your AI assistant 🤖"
  if (msg.includes("crypto")) return "Crypto trading is risky but profitable if you buy dips 🚀"
  if (msg.includes("stock")) return "Stocks are safer long-term investments 📈"
  if (msg.includes("parvinder")) return "This platform is proudly created by Parvinder Panwar 🙌"
  return "I am not sure about that 🤔 (demo mode)"
}
