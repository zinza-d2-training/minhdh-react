import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import EastIcon from '@mui/icons-material/East';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Research = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  position: absolute;
  width: 361px;
  height: 150px;
  left: 948px;
  top: 69px;
  background: #ffffff;
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
`;

const ResearchItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 24px;
  width: 361px;
  height: 74px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 25px;
  gap: 16px;
  width: 313px;
  height: 74px;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 231px;
  height: 42px;
`;

const IconPeople1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 36px;
  height: 36px;
  background: #ede7f6;
  border-radius: 6px;
`;

const IconPeople2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 36px;
  height: 36px;
  background: #f8f8f8;
  border-radius: 6px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 179px;
  height: 42px;
`;

const BodySmall = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.04px;
  color: rgba(0, 0, 0, 0.87);
`;

const IconContinue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0px 24px;
  width: 48px;
  height: 24px;
  border-radius: 6px;
`;

const BoxResearch = () => {
  return (
    <Research>
      <ResearchItem>
        <Container>
          <ContainerInfo>
            <IconPeople1>
              <PeopleAltIcon htmlColor="#5E35B1" />
            </IconPeople1>
            <Text>
              <Typography
                variant="body1"
                sx={{
                  width: '169px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Tra cứu chứng nhận tiêm
              </Typography>
              <BodySmall>Cập nhật nhanh và chính xác nhất</BodySmall>
            </Text>
          </ContainerInfo>
          <IconContinue>
            <EastIcon htmlColor="#5E35B1" />
          </IconContinue>
        </Container>
      </ResearchItem>
      <ResearchItem>
        <Container>
          <ContainerInfo>
            <IconPeople2>
              <PeopleAltIcon htmlColor="#1E88E5" />
            </IconPeople2>
            <Text>
              <Typography
                variant="body1"
                sx={{
                  width: '169px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Tra cứu kết quả đăng ký
              </Typography>
              <BodySmall>Cập nhật nhanh và chính xác nhất</BodySmall>
            </Text>
          </ContainerInfo>
          <IconContinue>
            <EastIcon htmlColor="#1E88E5" />
          </IconContinue>
        </Container>
      </ResearchItem>
    </Research>
  );
};

export default BoxResearch;
