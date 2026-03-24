import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import './ChatbotWidget.css';

type Sender = 'user' | 'bot';

type ChatMessage = {
  id: number;
  sender: Sender;
  text: string;
};

const chatbotImage = `${import.meta.env.BASE_URL}blog/chatbot.png`;
const configuredEndpoint = import.meta.env.VITE_CHAT_ENDPOINT?.trim().replace(/\/$/, '') || '';

function getChatEndpoint() {
  return configuredEndpoint || null;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipHidden, setIsTooltipHidden] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messageIdRef = useRef(0);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesRef.current;
    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [messages]);

  function appendMessage(text: string, sender: Sender) {
    messageIdRef.current += 1;
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: messageIdRef.current, sender, text },
    ]);
  }

  async function sendMessage() {
    const text = inputValue.trim();
    if (!text) return;

    appendMessage(text, 'user');
    setInputValue('');

    const endpoint = getChatEndpoint();

    if (!endpoint) {
      appendMessage('The chatbot backend is not connected yet.', 'bot');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error(`Chat request failed with status ${response.status}`);
      }

      const data = await response.json();
      const reply =
        typeof data?.response === 'string' && data.response.trim()
          ? data.response
          : 'The chatbot did not return a valid response.';

      appendMessage(reply, 'bot');
    } catch (error) {
      console.error(error);
      appendMessage('Server error. Please try again later.', 'bot');
    }
  }

  function handleToggle() {
    setIsTooltipHidden(true);
    setIsOpen((currentOpen) => !currentOpen);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  return (
    <div className={`portfolio-chatbot${isOpen ? ' portfolio-chatbot--open' : ''}`}>
      <div
        className={`portfolio-chatbot__tooltip${isTooltipHidden ? ' portfolio-chatbot__tooltip--hidden' : ''}`}
      >
        Hi, Chatbot here!
      </div>

      <div
        className={`portfolio-chatbot__window${isOpen ? ' portfolio-chatbot__window--open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="portfolio-chatbot__header">
          <div className="portfolio-chatbot__title">
            <div className="portfolio-chatbot__avatar">M</div>
            <span>Manik&apos;s AI Assistant</span>
          </div>
          <button
            type="button"
            className="portfolio-chatbot__close"
            onClick={handleClose}
            aria-label="Close chat"
          >
            &times;
          </button>
        </div>

        <div className="portfolio-chatbot__messages" ref={messagesRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`portfolio-chatbot__message portfolio-chatbot__message--${message.sender}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="portfolio-chatbot__input-area">
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleInputKeyDown}
            className="portfolio-chatbot__input"
            placeholder="Ask me anything..."
          />
          <button type="button" className="portfolio-chatbot__send" onClick={() => void sendMessage()}>
            &rarr;
          </button>
        </div>
      </div>

      <button
        type="button"
        className="portfolio-chatbot__button"
        onClick={handleToggle}
        aria-label={isOpen ? 'Hide chatbot' : 'Open chatbot'}
        style={{ backgroundImage: `url("${chatbotImage}")` }}
      />
    </div>
  );
}
