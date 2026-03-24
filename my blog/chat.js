const button = document.getElementById("chatbot-button");
const widget = document.getElementById("chatbot-widget");
const chatbotTooltip = document.getElementById("chatbot-tooltip");
const windowEl = document.getElementById("chatbot-window");
const closeBtn = document.getElementById("chatbot-close");
const sendBtn = document.getElementById("chatbot-send");
const input = document.getElementById("chatbot-input");
const messages = document.getElementById("chatbot-messages");

function getChatEndpoint() {
    const configuredEndpoint = widget?.getAttribute("data-chat-endpoint")?.trim();

    if (!configuredEndpoint) {
        return null;
    }

    return configuredEndpoint.replace(/\/$/, "");
}

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function setChatWindowOpen(isOpen) {
    windowEl.classList.toggle("hidden", !isOpen);
    widget.classList.toggle("no-float", isOpen);
}

async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    const endpoint = getChatEndpoint();

    if (!endpoint) {
        addMessage("The chatbot backend is not connected yet.", "bot");
        return;
    }

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: text })
        });

        if (!response.ok) {
            throw new Error(`Chat request failed with status ${response.status}`);
        }

        const data = await response.json();
        const reply =
            typeof data?.response === "string" && data.response.trim()
                ? data.response
                : "The chatbot did not return a valid response.";

        addMessage(reply, "bot");
    } catch (error) {
        console.error(error);
        addMessage("Server error. Please try again later.", "bot");
    }
}

if (button && widget && chatbotTooltip && windowEl && closeBtn && sendBtn && input && messages) {
    button.addEventListener("click", () => {
        chatbotTooltip.classList.add("hidden");
        setChatWindowOpen(windowEl.classList.contains("hidden"));
    });

    closeBtn.addEventListener("click", () => {
        setChatWindowOpen(false);
    });

    sendBtn.addEventListener("click", sendMessage);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });

    setChatWindowOpen(false);
}
