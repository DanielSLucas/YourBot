import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.main`
  max-width: 1100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VerticalDivider = styled.div`
  background: #d3d3d3;
  height: 20rem;
  width: 1px;
  margin: 0 4rem;
`;

export const HorizontalDivider = styled.div`
  background: #d3d3d3;
  width: 100%;
  height: 1px;
  margin: 4rem 0;
`;

export const Intro = styled.section`
  margin-right: 1rem;
  h1 {
    font-size: 5rem;
    font-family: 'Red Hat Mono', monospace;
    font-weight: bold;
  }

  p {
    width: 34rem;
  }

  & > p {
    margin-top: 2rem;
    font-size: 2rem;
  }

  div {
    width: 30rem;
    h2 {
      font-size: 2rem;
    }

    p {
      width: 100%;
      margin-top: 2rem;
      font-size: 1rem;
      text-indent: 3rem;
    }

    pre {
      width: fit-content;
      background: #fafafc;
      padding: 1rem;
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

  h2 {
    font-size: 2rem;
  }

  & > div {
    height: 16rem;
    width: 18rem;

    margin: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    border: 1px solid #d3d3d3;
    border-radius: 0.5rem;
  }

  button {
    width: 100%;
    height: 2rem;

    border-radius: 0.5rem;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  border-top: 2px solid ${props => props.theme.colors.secondary};
  width: 1.5rem;
  height: 1.5rem;
  -webkit-animation: ${spin} 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;
