import React, { useEffect, useState } from "react";
import "./ChattingPage.css"; // Import the CSS file
import messagesData from "../../assets/messages.json"; // Import the JSON file

const ChatPage = ({ onNewMessage }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    setMessages(messagesData); // Load messages from the imported JSON file
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newMessage = { text, sender: "You" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setText("");
      if (onNewMessage) onNewMessage(newMessage); // Notify parent component
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-header">Chat</h1>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <strong>{msg.sender}:</strong> <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="message-input-form">
        <input
          type="text"
          value={text} // Bind input value to text state
          onChange={(e) => setText(e.target.value)} // Update state on input change
          placeholder="Type your message..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
