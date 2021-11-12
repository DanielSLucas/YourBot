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
  max-width: 1100px;

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
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 5rem;
      font-family: 'Red Hat Mono', monospace;
      font-weight: bold;
    }

    svg {
      height: 5rem;
      width: 5rem;
      margin-right: 0.5rem;
    }
  }
`;

export const Chat = styled.div`
  width: 32rem;
  height: 34rem;

  border: 1px solid #d3d3d3;
  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25); */

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
      width: 100%;
      height: 2rem;
    }

    button {
      width: 2rem;
      height: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Message = styled.div<MessageProps>`
  font-size: 1.125rem;
  width: fit-content;
  height: fit-content;

  margin-top: 1rem;
  padding: 0.5rem;

  border: 1px solid #d3d3d3;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  align-self: ${props => (props.from === 'user' ? 'flex-end' : 'flex-start')};

  span {
    font-size: 0.7rem;
    align-self: ${props => (props.from === 'user' ? 'flex-end' : 'flex-start')};
  }
`;
