/* eslint-disable react/no-array-index-key */
import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiArrowLeft, FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';

import { Container, ContentWrapper, Chat, Message } from './styles';

type IMessage = {
  text: string;
  from: 'user' | 'bot';
};

const socket = io('http://localhost:5000');

const Bot: React.FC = () => {
  const chatDivRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [userMessage, setUserMessage] = useState('');
  const [userMsgSent, setUserMsgSent] = useState(false);

  useEffect(() => {
    if (!userMsgSent) {
      setUserMsgSent(false);
      socket.on('message', data => {
        setMessages(state => [
          ...state,
          { text: JSON.parse(data).message, from: 'bot' },
        ]);
      });
    }
  }, [userMsgSent]);

  const handleSendMessage = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setMessages(state => [...state, { text: userMessage, from: 'user' }]);
      const data = {
        message: userMessage,
      };

      setUserMessage('');
      socket.emit('message', data);
      setUserMsgSent(true);
    },
    [userMessage],
  );

  useEffect(() => {
    if (chatDivRef.current)
      chatDivRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <Container>
      <ContentWrapper>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <header>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9288 7.27258H4.9288C3.82423 7.27258 2.9288 8.16801 2.9288 9.27258V20.2726C2.9288 21.3772 3.82423 22.2726 4.9288 22.2726H20.9288C22.0334 22.2726 22.9288 21.3772 22.9288 20.2726V9.27258C22.9288 8.16801 22.0334 7.27258 20.9288 7.27258Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.9288 2.27258L12.9288 7.27258L7.9288 2.27258"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="13" r="1" fill="black" />
            <circle cx="9" cy="13" r="1" fill="black" />
            <circle cx="9" cy="13" r="1" fill="black" />
            <circle cx="17" cy="13" r="1" fill="black" />
            <circle cx="17" cy="13" r="1" fill="black" />
            <circle cx="17" cy="13" r="1" fill="black" />
            <line x1="9" y1="17.5" x2="17" y2="17.5" stroke="black" />
          </svg>
          <h1>YourBot</h1>
        </header>

        <Chat>
          <div>
            {messages &&
              messages.map((msg, i) => (
                <Message key={i} from={msg.from}>
                  {msg.text}
                  <span>{msg.from === 'user' ? 'you' : 'bot'}</span>
                </Message>
              ))}
            <div ref={chatDivRef} />
          </div>
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              onChange={e => setUserMessage(e.target.value)}
              value={userMessage}
            />
            <button type="submit">
              <FiSend />
            </button>
          </form>
        </Chat>
      </ContentWrapper>
    </Container>
  );
};

export default Bot;
