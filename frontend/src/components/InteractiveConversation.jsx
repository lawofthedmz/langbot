import React, { useState } from 'react';
import styled from 'styled-components';

const InteractiveConversation = () => {
  const [conversation, setConversation] = useState([
    { text: 'Hi! How can I help you today?', user: false },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    setConversation([...conversation, { text: input, user: true }]);
    setInput('');
    // Simulate AI response
    setTimeout(() => {
      setConversation((prev) => [
        ...prev,
        { text: 'That sounds great!', user: false },
      ]);
    }, 1000);
  };

  return (
    <ConversationContainer>
      <Messages>
        {conversation.map((msg, index) => (
          <Message key={index} user={msg.user}>
            {msg.text}
          </Message>
        ))}
      </Messages>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </InputContainer>
    </ConversationContainer>
  );
};

const ConversationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
`;

const Message = styled.div`
  align-self: ${({ user }) => (user ? 'flex-end' : 'flex-start')};
  background: ${({ user }) => (user ? '#4a90e2' : '#ddd')};
  color: ${({ user }) => (user ? 'white' : 'black')};
  padding: 10px;
  border-radius: 5px;
  max-width: 70%;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3a78c2;
  }
`;

export default InteractiveConversation;
