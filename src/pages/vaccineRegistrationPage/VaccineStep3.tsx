import { Button, Typography } from '@mui/material';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const VaccineRegistrationStep3 = styled.div``;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 36px;
  width: 1447px;
  height: 64px;
  background: #f5f5f5;
  margin-top: 30px;
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  width: 1447px;
  height: 40px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const ContainerBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 1368px;
  height: 40px;
  background: #ffffff;
`;

const VaccineStep = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 1368px;
  height: 40px;
`;

const HeaderStep = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 604px;
  height: 24px;
`;

const TextStep = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 680px;
  height: 24px;
  margin-right: 25px;
`;

const IconStep = styled.div`
  width: 24px;
  height: 24px;
`;

const BoxDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 250px;
  height: 24px;
`;

const Divider = styled.div`
  width: 250px;
  height: 1px;
  background: #bdbdbd;
`;

const Typo1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 111px;
  height: 20px;
  margin-left: 10px;
`;

const Typo2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 112px;
  height: 20px;
`;

const Typo3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 72px;
  height: 20px;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  width: 1440px;
  height: 424px;
  margin-bottom: 100px;
`;

const ContainerResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 424px;
  background: #ffffff;
`;
const FormSubmit = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 424px;
`;

const TextLine1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 1368px;
  height: 32px;
  & .red {
    color: red;
  }
`;

const TextLine2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 1368px;
  height: 48px;
  & .blue {
    color: blue;
  }
`;

const LinkApp = styled.a`
  color: red;
  text-decoration: none;
`;

const TextLine3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 1368px;
  height: 24px;
`;

const InfoLine1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 0px;
  width: 1368px;
  height: 76px;
`;

const InfoLine2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 0px 0px;
  width: 1368px;
  height: 52px;
`;

const InfoLine3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 0px;
  width: 1368px;
  height: 52px;
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 456px;
  height: 52px;
`;

const Submit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 0px;
  gap: 16px;
  width: 1368px;
  height: 60px;
`;

const ButtonBack = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  gap: 4px;
  width: 140px;
  height: 36px;
  border: 1px solid #303f9f;
  border-radius: 8px 8px 8px 0px;
`;

const ButtonContinue = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 32px;
  gap: 4px;
  width: 210px;
  height: 36px;
  background: #303f9f;
  border-radius: 8px 8px 8px 0px;
`;

const FilePdf = styled.div``;

const VaccineStep3 = () => {
  const exportPDF = () => {
    const inputFile: HTMLElement | null = document.getElementById('pdf');
    if (inputFile) {
      html2canvas(inputFile).then((canvas: HTMLCanvasElement) => {
        const imgData = canvas.toDataURL('image/png');
        const PdfFile = new jsPDF();
        PdfFile.addImage(imgData, 'JEPG', 5, 40, 200, 60);
        PdfFile.save('Th??ng tin ti??m ch???ng.pdf');
      });
    }
  };

  return (
    <VaccineRegistrationStep3>
      <Header />
      <Heading>
        <Typography
          sx={{
            width: '262px',
            height: '37px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '28px',
            lineHeight: '133.4%',
            color: 'rgba(0, 0, 0, 0.87)'
          }}>
          Tra c???u ????ng k?? ti??m
        </Typography>
      </Heading>
      <ProgressBar>
        <ContainerBar>
          <VaccineStep>
            <HeaderStep>
              <IconStep>
                <CheckCircleIcon color="primary" />
              </IconStep>
              <BoxDivider>
                <Divider />
              </BoxDivider>
              <IconStep>
                <CheckCircleIcon color="primary" />
              </IconStep>
              <BoxDivider>
                <Divider />
              </BoxDivider>
              <IconStep>
                <CheckCircleIcon color="primary" />
              </IconStep>
            </HeaderStep>
            <TextStep>
              <Typo1>
                <Typography
                  sx={{
                    width: '111px',
                    height: '20px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '143%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Th??ng tin c?? nh??n
                </Typography>
              </Typo1>
              <Typo2>
                <Typography
                  sx={{
                    width: '111px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '143%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Phi???u ?????ng ?? ti??m
                </Typography>
              </Typo2>
              <Typo3>
                <Typography
                  sx={{
                    width: '111px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '143%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Ho??n th??nh
                </Typography>
              </Typo3>
            </TextStep>
          </VaccineStep>
        </ContainerBar>
      </ProgressBar>
      <Result>
        <ContainerResult>
          <FormSubmit>
            <FilePdf id="pdf">
              <TextLine1>
                <Typography
                  sx={{
                    width: '1368px',
                    height: '32px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '160%',
                    textAlign: 'center',
                    letterSpacing: '-0.05px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  ????ng k?? ti??m ch???ng COVID-19 th??nh c??ng. M?? ?????t ti??m c???a b???n l??
                  <span className="red"> 0120211103501237</span>.
                </Typography>
              </TextLine1>
              <TextLine2>
                <Typography
                  sx={{
                    width: '1368px',
                    height: '48px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    textAlign: 'center',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  C???m ??n qu?? kh??ch ???? ????ng k?? ti??m ch???ng v???c xin COVID-19. Hi???n
                  t???i B??? y t??? ??ang ti???n h??nh thu th???p nhu c???u v?? th??ng tin ?????
                  l???p danh s??ch ?????i t?????ng ????ng k?? ti??m v???c xin COVID-19 theo
                  t???ng ?????a b??n. Ch??ng t??i s??? li??n h??? v???i qu?? kh??ch theo s??? ??i???n
                  tho???i
                  <span className="blue"> 0123456789</span> khi c?? k??? ho???ch ti??m
                  trong th???i gian s???m nh???t.
                </Typography>
              </TextLine2>
              <TextLine3>
                <Typography
                  sx={{
                    width: '1368px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    textAlign: 'center',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  M???i b???n t???i ???ng d???ng "S??? S???C KH???E ??I???N T???" t???i{' '}
                  <LinkApp href="https://hssk.kcb.vn/#/sskdt">
                    https://hssk.kcb.vn/#/sskdt
                  </LinkApp>{' '}
                  ????? theo d??i k???t qu??? ????ng k?? ti??m v?? nh???n ch???ng nh???n ti??m ch???ng
                  COVID-19
                </Typography>
              </TextLine3>
              <InfoLine1>
                <BoxInfo>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    H??? v?? t??n
                  </Typography>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Nguy???n V??n A
                  </Typography>
                </BoxInfo>
                <BoxInfo>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Ng??y sinh
                  </Typography>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    16/10/1994
                  </Typography>
                </BoxInfo>
                <BoxInfo>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Gi???i t??nh
                  </Typography>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Nam
                  </Typography>
                </BoxInfo>
              </InfoLine1>
              <InfoLine2>
                <BoxInfo>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    S??? CMND/CCCD/M?? ?????nh danh c??ng d??n
                  </Typography>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    030012345678
                  </Typography>
                </BoxInfo>
                <BoxInfo>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    S??? th??? BHYT
                  </Typography>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    1111111111111
                  </Typography>
                </BoxInfo>
              </InfoLine2>
              <InfoLine3>
                <BoxInfo>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    T???nh/Th??nh ph???
                  </Typography>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Th??nh ph??? H?? N???i
                  </Typography>
                </BoxInfo>
                <BoxInfo>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Qu???n/Huy???n
                  </Typography>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Qu???n Long Bi??n
                  </Typography>
                </BoxInfo>
                <BoxInfo>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    X??/Ph?????ng
                  </Typography>
                  <Typography
                    sx={{
                      width: '456px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Ph?????ng Giang Bi??n
                  </Typography>
                </BoxInfo>
              </InfoLine3>
            </FilePdf>
            <Submit>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ButtonBack>
                  <Typography
                    sx={{
                      width: '120px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      textTransform: 'uppercase',
                      color: '#303F9F'
                    }}>
                    Trang ch???
                  </Typography>
                </ButtonBack>
              </Link>
              <ButtonContinue onClick={exportPDF}>
                <Typography
                  sx={{
                    width: '150px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    textTransform: 'uppercase',
                    color: 'white'
                  }}>
                  Xu???t th??ng tin
                </Typography>
              </ButtonContinue>
            </Submit>
          </FormSubmit>
        </ContainerResult>
      </Result>
      <Footer />
    </VaccineRegistrationStep3>
  );
};

export default VaccineStep3;
