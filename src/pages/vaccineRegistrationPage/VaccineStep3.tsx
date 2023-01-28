import { Button, Typography } from '@mui/material';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Footer from '../../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import {
  Ward,
  District,
  Province
} from '../homePage/componentsHome/InjectionSite';
import { useAllProvincesQuery } from './hooks/useAllProvincesQuery';
import { useAllDistrictsQuery } from './hooks/useAllDistrictsQuery';
import { useAllWardsQuery } from './hooks/useAllWardsQuery';
import moment from 'moment/moment';
import * as React from 'react';

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
        PdfFile.save('Thông tin tiêm chủng.pdf');
      });
    }
  };

  const currentUser = useCurrentUser();
  const location: any = useLocation();
  const numBHYT = location.state.numBHYT;
  const registration_code = location.state.registration_code;

  const findNameWard = (id: any) => {
    return allWards.find((element: Ward) => element.id === id)?.name;
  };

  const findNameDistrict = (id: any) => {
    const ward = allWards.find((element: Ward) => element.id === id);
    return allDistricts.find(
      (element: District) => element.id === ward?.district_id
    )?.name;
  };

  const findNameProvince = (id: any) => {
    const ward = allWards.find((element: Ward) => element.id === id);
    const district = allDistricts.find(
      (element: District) => element.id === ward?.district_id
    );
    return allProvinces.find(
      (element: Province) => element.id === district?.province_id
    )?.name;
  };

  const allProvincesQuery = useAllProvincesQuery();
  const allDistrictsQuery = useAllDistrictsQuery();
  const allWardsQuery = useAllWardsQuery();

  const allProvinces = React.useMemo(() => {
    return allProvincesQuery.data ?? [];
  }, [allProvincesQuery.data]);

  const allDistricts = React.useMemo(() => {
    return allDistrictsQuery.data ?? [];
  }, [allDistrictsQuery.data]);

  const allWards = React.useMemo(() => {
    return allWardsQuery.data ?? [];
  }, [allWardsQuery.data]);

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
          Tra cứu đăng ký tiêm
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
                  Thông tin cá nhân
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
                  Phiếu đồng ý tiêm
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
                  Hoàn thành
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
                  Đăng ký tiêm chủng COVID-19 thành công. Mã đặt tiêm của bạn là
                  <span className="red"> {registration_code}</span>.
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
                  Cảm ơn quý khách đã đăng ký tiêm chủng vắc xin COVID-19. Hiện
                  tại Bộ y tế đang tiến hành thu thập nhu cầu và thông tin để
                  lập danh sách đối tượng đăng ký tiêm vắc xin COVID-19 theo
                  từng địa bàn. Chúng tôi sẽ liên hệ với quý khách theo số điện
                  thoại
                  <span className="blue"> 0123456789</span> khi có kế hoạch tiêm
                  trong thời gian sớm nhất.
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
                  Mời bạn tải ứng dụng "SỔ SỨC KHỎE ĐIỆN TỬ" tại{' '}
                  <LinkApp href="https://hssk.kcb.vn/#/sskdt">
                    https://hssk.kcb.vn/#/sskdt
                  </LinkApp>{' '}
                  để theo dõi kết quả đăng ký tiêm và nhận chứng nhận tiêm chủng
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
                    Họ và tên
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
                    {currentUser?.name}
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
                    Ngày sinh
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
                    {moment(currentUser?.birthday).format('DD/MM/YYYY')}
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
                    Giới tính
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
                    {currentUser?.gender}
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
                    Số CMND/CCCD/Mã định danh công dân
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
                    {currentUser?.identity_card_number}
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
                    Số thẻ BHYT
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
                    {numBHYT ? numBHYT : 'Chưa có'}
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
                    Tỉnh/Thành phố
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
                    {findNameProvince(currentUser?.ward_id)}
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
                    Quận/Huyện
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
                    {findNameDistrict(currentUser?.ward_id)}
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
                    Xã/Phường
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
                    {findNameWard(currentUser?.ward_id)}
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
                    Trang chủ
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
                  Xuất thông tin
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
