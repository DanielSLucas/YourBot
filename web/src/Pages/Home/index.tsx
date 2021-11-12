import React, { useCallback, useContext, useState } from 'react';
import { FiFileText } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

import { ThemeContext } from 'styled-components';
import api from '../../services/api';

import {
  Container,
  ContentWrapper,
  Intro,
  UploadArea,
  VerticalDivider,
  HorizontalDivider,
  Loader,
} from './styles';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const [file, setFile] = useState<File>({} as File);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleClick = useCallback(() => {
    setIsLoading(true);

    const data = new FormData();

    data.append('file', file);

    api
      .post('/train', data, {
        headers: { Accept: 'multipart/form-data' },
      })
      .then(() => {
        setIsLoading(false);
        navigate('/bot', { replace: false });
      });
  }, [navigate, file]);

  return (
    <Container>
      <ContentWrapper>
        <Intro>
          <header>
            <div>
              <h1>YourBot</h1>
            </div>

            <p>
              Já pensou em treinar seu próprio bot?
              <br />
              Aqui você pode!
            </p>
          </header>

          <HorizontalDivider />

          <div>
            <h2>Como?</h2>

            <p>
              Envie um arquivo de texto (.txt) no formato abaixo e seu
              treinaremos seu bot.
            </p>

            <pre>
              Oi {'\n'}
              Olá {'\n'}
              Tudo bem? {'\n'}
              Estou sim e você? {'\n'}
              Estou bem também {'\n'}
              ...
            </pre>
          </div>
        </Intro>

        <VerticalDivider />

        <UploadArea>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9288 7.27258H4.9288C3.82423 7.27258 2.9288 8.16801 2.9288 9.27258V20.2726C2.9288 21.3772 3.82423 22.2726 4.9288 22.2726H20.9288C22.0334 22.2726 22.9288 21.3772 22.9288 20.2726V9.27258C22.9288 8.16801 22.0334 7.27258 20.9288 7.27258Z"
              stroke={theme.colors.primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.9288 2.27258L12.9288 7.27258L7.9288 2.27258"
              stroke={theme.colors.primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="13" r="1" fill={theme.colors.primary} />
            <circle cx="9" cy="13" r="1" fill={theme.colors.primary} />
            <circle cx="9" cy="13" r="1" fill={theme.colors.primary} />
            <circle cx="17" cy="13" r="1" fill={theme.colors.primary} />
            <circle cx="17" cy="13" r="1" fill={theme.colors.primary} />
            <circle cx="17" cy="13" r="1" fill={theme.colors.primary} />
            <line
              x1="9"
              y1="17.5"
              x2="17"
              y2="17.5"
              stroke={theme.colors.primary}
            />
          </svg>
          <h2>Arquivo de treino</h2>
          <div {...getRootProps()}>
            <input {...getInputProps()} multiple={false} />

            <p>
              <FiFileText />
              {isDragActive ? (
                <>Solte o arquivo aqui...</>
              ) : (
                <>
                  {!file.name
                    ? 'Solte o arquivo aqui, ou clique para selecionar o arquivo'
                    : file.name}
                </>
              )}
            </p>
          </div>
          <button type="button" disabled={!file.name} onClick={handleClick}>
            {' '}
            {isLoading ? <Loader /> : 'Criar bot'}
          </button>
        </UploadArea>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
