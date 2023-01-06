import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const Wrapper = styled.div`
  text-align: center;
`;

const ButtonBack = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
  gap: 4px;
  width: 135px;
  height: 40px;
  background: blue;
  border-radius: 8px 8px 8px 8px;
  margin: auto;
`;

const ItemButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 135px;
  height: 50px;
  margin: auto;
  & .text {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: -0.04px;
    text-transform: uppercase;
    color: white;
  }
`;

const UnAuthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Wrapper>
      <h1>Unauthorized</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <ItemButton>
        <ButtonBack onClick={goBack}>
          <span className="text">Go Back</span>
        </ButtonBack>
      </ItemButton>
    </Wrapper>
  );
};

export default UnAuthorized;
