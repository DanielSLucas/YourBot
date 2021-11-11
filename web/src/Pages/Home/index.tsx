import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

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
        window.location.reload();
      });
  }, [navigate, file]);

  return (
    <Container>
      <ContentWrapper>
        <Intro>
          <h1>YourBot</h1>
          <p>
            Já pensou em treinar seu próprio bot?
            <br />
            Aqui você pode!
          </p>

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
          <h2>Arquivo de treino</h2>
          <div {...getRootProps()}>
            <input {...getInputProps()} multiple={false} />
            {isDragActive ? (
              <p>Solte o arquivo aqui...</p>
            ) : (
              <p>
                {!file.name
                  ? 'Solte o arquivo aqui, ou clique para selecionar o arquivo'
                  : file.name}
              </p>
            )}
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
