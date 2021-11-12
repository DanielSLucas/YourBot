import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.main`
  max-width: 1375px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VerticalDivider = styled.div`
  background: ${props => props.theme.colors.border};
  height: 25rem;
  width: 1px;
  margin: 0 4rem;
`;

export const HorizontalDivider = styled.div`
  background: ${props => props.theme.colors.border};
  width: 100%;
  height: 1px;
  margin: 4rem 0;
`;

export const Intro = styled.section`
  margin-right: 1rem;
  header {
    & > div {
      display: flex;
      align-items: center;

      h1 {
        color: ${props => props.theme.colors.text};
        font-size: 6.25rem;
        font-family: 'Red Hat Mono', monospace;
        font-weight: bold;
      }
    }

    p {
      width: 42.5rem;
    }

    & > p {
      margin-top: 2rem;
      font-size: 2.5rem;
    }
  }

  div {
    width: 37.5rem;
    h2 {
      color: ${props => props.theme.colors.text};
      font-size: 2.5rem;
    }

    p {
      width: 100%;
      margin-top: 2rem;
      font-size: 1.25rem;
      text-indent: 3rem;
    }

    pre {
      font-size: 1.25rem;
      width: fit-content;
      background: ${props => props.theme.colors.lighterBackground};
      padding: 1rem;
      border: 1px solid ${props => props.theme.colors.primary};
      border-radius: 0.25rem;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`;

export const UploadArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  svg {
    height: 6.25rem;
    width: 6.25rem;
    margin-bottom: 2rem;
  }

  h2 {
    color: ${props => props.theme.colors.text};
    font-size: 2.5rem;
  }

  & > div {
    height: 20rem;
    width: 22.5rem;

    margin: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    font-size: 1.25rem;

    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 0.5rem;
  }

  div p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      margin-bottom: 0.5rem;
    }
  }

  button {
    background: ${props => props.theme.colors.secondary};

    color: ${props => props.theme.colors.text};
    font-size: 1.125rem;

    width: 100%;
    height: 2.5rem;

    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: transform 0.2s, box-shadow 0.2s, opacity 0.3s;

    &:enabled {
      &:hover {
        transform: translateY(-3px);
        box-shadow: 2px 3px 5px ${props => props.theme.colors.shadow};
      }

      &:active {
        transform: translateY(2px);
        box-shadow: -2px -3px 4px ${props => props.theme.colors.shadow};
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: no-drop;
    }
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  border-top: 2px solid ${props => props.theme.colors.background};
  width: 1.5rem;
  height: 1.5rem;
  -webkit-animation: ${spin} 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;
