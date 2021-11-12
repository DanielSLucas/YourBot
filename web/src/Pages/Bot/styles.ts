import styled, { keyframes } from 'styled-components';

interface MessageProps {
  from: 'user' | 'bot';
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContentWrapper = styled.main`
  position: relative;
  max-width: 1375px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromTop} 1s;

  & > a {
    position: absolute;
    top: 0;
    left: 0;

    svg {
      width: 1.875rem;
      height: 1.875rem;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${props => props.theme.colors.primary};
      font-size: 6.25rem;
      font-family: 'Red Hat Mono', monospace;
      font-weight: bold;
    }

    svg {
      height: 6.25rem;
      width: 6.25rem;
      margin-right: 0.5rem;
    }
  }
`;

export const Chat = styled.div`
  width: 40rem;
  height: 42.5rem;

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    width: 97%;
    height: 100%;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0.5rem 0;
  }

  & > div::-webkit-scrollbar {
    display: none;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      padding: 0.5rem;
      width: 100%;
      height: 2.5rem;
      font-size: 1.25rem;

      border: 1px solid ${props => props.theme.colors.border};

      border-radius: 0.25rem;

      background: ${props => props.theme.colors.lighterBackground};
      color: ${props => props.theme.colors.text};
    }

    button {
      background: ${props => props.theme.colors.secondary};

      width: 2.5rem;
      height: 2.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid ${props => props.theme.colors.border};
      border-radius: 0.25rem;

      svg {
        color: ${props => props.theme.colors.text};
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
`;

export const Message = styled.div<MessageProps>`
  font-size: 1.40625rem;
  width: fit-content;
  height: fit-content;

  margin-top: 1rem;
  padding: 0.5rem;

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  align-self: ${props => (props.from === 'user' ? 'flex-end' : 'flex-start')};

  span {
    color: ${props => props.theme.colors.primary};
    font-size: 0.875rem;
    align-self: ${props => (props.from === 'user' ? 'flex-end' : 'flex-start')};
  }
`;
