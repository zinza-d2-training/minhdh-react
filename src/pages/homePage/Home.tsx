import {
  Typography,
  Button,
  TextField,
  Divider,
  Table,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from '@mui/material';
import styled from '@emotion/styled';
import logo from '../../images/Logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EastIcon from '@mui/icons-material/East';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import logo2in1 from '../../images/logo2in1.png';
import handle_cert1 from '../../images/handle_cert1.png';
import { useForm, Controller } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface InjectionSite {
  id: number;
  name: string;
  location: string;
  wardId: number;
  leader: string;
  numberOfInjectionTables: number;
}

type Inputs = {
  provinceId: number;
  districtId: number;
  wardId: number;
};

interface Province {
  id: number;
  name: string;
}

interface District {
  id: number;
  name: string;
  provinceId: number;
}

interface Ward {
  id: number;
  name: string;
  districtId: number;
}

const provinces: Province[] = [{ id: 1, name: 'Thành phố Hà Nội' }];

const districts: District[] = [
  { id: 1, name: 'Quận Ba Đình', provinceId: 1 },
  { id: 2, name: 'Quận Đống Đa ', provinceId: 1 }
];

const wards: Ward[] = [
  { id: 1, name: 'Phường Phúc Xá ', districtId: 1 },
  { id: 2, name: 'Phường Trúc Bạch ', districtId: 1 },
  { id: 3, name: 'Phường Cát Linh ', districtId: 2 },
  { id: 4, name: 'Phường Láng Thượng ', districtId: 2 }
];

const injectionSites: InjectionSite[] = [
  {
    id: 1,
    name: 'Bệnh viện Đa khoa Medlatec',
    location: '42-44 Nghĩa Dũng',
    wardId: 1,
    leader: 'Nguyễn Thị Kim Liên',
    numberOfInjectionTables: 1
  },
  {
    id: 2,
    name: 'Bệnh viện Đa khoa Hồng Ngọc',
    location: '55 Yên Ninh	',
    wardId: 2,
    leader: 'Cao Độc Lập',
    numberOfInjectionTables: 1
  },
  {
    id: 3,
    name: 'Trạm y tế Phường Cát Linh',
    location: '22 Cát Linh	',
    wardId: 3,
    leader: 'Nguyễn Thị Hồng Hoan',
    numberOfInjectionTables: 1
  },
  {
    id: 4,
    name: 'Bệnh viện Nhi Trung Ương',
    location: '18/879 La Thành',
    wardId: 4,
    leader: 'Lê Kiến Ngãi',
    numberOfInjectionTables: 10
  }
];

const HomePage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0px;
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 0px;
  background: linear-gradient(90deg, #ed1b23 0%, #2e3091 52.08%, #253494 100%);
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 90px;
  width: 100%;
  height: 50px;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 460px;
  height: 50px;
`;

const Logo = styled.img`
  width: 42px;
  height: 50px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 524px;
  height: 50px;
`;

const ItemHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 71px;
  height: 50px;
`;

const ItemInject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 93px;
  height: 50px;
`;

const ItemResearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 78px;
  height: 50px;
`;

const ItemDocs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 51px;
  height: 50px;
`;

const ItemLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 135px;
  height: 50px;
`;

const ButtonLogin = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
  gap: 4px;
  width: 135px;
  height: 40px;
  background: #ffffff;
  border-radius: 8px 8px 8px 0px;
  & > span {
    width: 91px;
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: -0.04px;
    text-transform: uppercase;
    color: #303f9f;
  }
`;

const Ul = styled.div`
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

const Li = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 24px;
  width: 361px;
  height: 74px;
`;

const Frame53 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 25px;
  gap: 16px;
  width: 313px;
  height: 74px;
`;

const Frame57 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 231px;
  height: 42px;
`;

const Frame58 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 231px;
  height: 42px;
`;

const Frame54 = styled.div`
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

const Frame542 = styled.div`
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

const Frame55 = styled.div`
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

const Frame56 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0px 24px;
  width: 48px;
  height: 24px;
  border-radius: 6px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px 16px;
  position: absolute;
  width: 1487px;
  height: 190px;
  left: 0px;
  bottom: 0px;
  top: 1500px;
  background: #2d2188;
`;

const Frame18 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 560px;
  height: 137px;
  & .span1 {
    font-weight: 700;
  }
  & .span2 {
    color: red;
  }
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 16px;
  width: 524px;
`;

const ContainerLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 195px;
  height: 89px;
`;

const Logo2in1 = styled.img`
  width: 195px;
  height: 89px;
`;

const ContainerButtonApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 524px;
  height: 40px;
`;

const ButtonAppForHCM = styled(Button)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
  gap: 4px;
  width: 249px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 8px 8px 8px 0px;
  & > span {
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.04px;
    color: #ffffff;
  }
`;

const ButtonAppStore = styled(Button)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 4px;
  width: 115px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 8px 8px 8px 0px;
  & > span {
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.04px;
    color: #ffffff;
  }
`;

const ButtonGGPlay = styled(Button)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 15px;
  gap: 4px;
  width: 128px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 8px 8px 8px 0px;
  & > span {
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.04px;
    color: #ffffff;
  }
`;

const Cert = styled.img`
  width: 220px;
  height: 100px;
`;

const Home = () => {
  const formSchema = Yup.object().shape({
    provinceId: Yup.number(),
    districtId: Yup.number(),
    wardId: Yup.number()
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const { register, handleSubmit, watch, control } =
    useForm<Inputs>(validationOpt);

  const onSubmit = () => {};
  const provinceId = watch('provinceId');
  const districtId = watch('districtId');

  const filterDistricts: District[] = useMemo(() => {
    return districts.filter((district) => district.provinceId === provinceId);
  }, [provinceId]);

  const filterWards: Ward[] = useMemo(() => {
    return wards.filter((ward) => ward.districtId === districtId);
  }, [districtId]);

  return (
    <HomePage>
      <Header>
        <ContainerHeader>
          <Brand>
            <Logo src={logo} alt="" />
            <Typography
              variant="h6"
              sx={{
                width: '420px',
                height: '32px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '19px',
                lineHeight: '160%',
                color: '#FFFFFF'
              }}>
              CỔNG THÔNG TIN TIÊM CHỦNG COVID-19
            </Typography>
          </Brand>
          <Menu>
            <ItemHome>
              <Typography
                variant="body1"
                sx={{
                  width: '71px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#FFFFFF'
                }}>
                Trang chủ
              </Typography>
            </ItemHome>
            <ItemInject>
              <Typography
                variant="body1"
                sx={{
                  width: '93px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#FFFFFF'
                }}>
                Đăng ký tiêm
              </Typography>
            </ItemInject>
            <ItemResearch>
              <Typography
                variant="body1"
                sx={{
                  width: '71px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#FFFFFF'
                }}>
                Tra cứu
              </Typography>
              <KeyboardArrowDownIcon htmlColor="white" />
            </ItemResearch>
            <ItemDocs>
              <Typography
                variant="body1"
                sx={{
                  width: '71px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#FFFFFF'
                }}>
                Tài liệu
              </Typography>
            </ItemDocs>
            <ItemLogin>
              <ButtonLogin>
                <span>Đăng nhập</span>
              </ButtonLogin>
            </ItemLogin>
          </Menu>
        </ContainerHeader>
      </Header>

      <Ul>
        <Li>
          <Frame53>
            <Frame57>
              <Frame54>
                <PeopleAltIcon htmlColor="#5E35B1" />
              </Frame54>
              <Frame55>
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
              </Frame55>
            </Frame57>
            <Frame56>
              <EastIcon htmlColor="#5E35B1" />
            </Frame56>
          </Frame53>
        </Li>
        <Li>
          <Frame53>
            <Frame58>
              <Frame542>
                <PeopleAltIcon htmlColor="#1E88E5" />
              </Frame542>
              <Frame55>
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
              </Frame55>
            </Frame58>
            <Frame56>
              <EastIcon htmlColor="#1E88E5" />
            </Frame56>
          </Frame53>
        </Li>
      </Ul>
      {/*
      <AggregateParameters>
        <Frame2>
          <IconRegisterPeople>
            <PersonIcon />
            <AddCircleOutlineIcon />
          </IconRegisterPeople>
          <Frame32>
            <Typography variant="body1">Đối tượng đăng ký tiêm</Typography>
            <Typography variant="h3">11.203.873 (lượt)</Typography>
          </Frame32>
        </Frame2>
        <Divider />
        <Frame3>
          <VaccinesIcon />
          <Frame33>
            <Typography variant="body1">Số mũi tiêm hôm qua</Typography>
            <Typography variant="h3">1,762,119 (mũi)</Typography>
          </Frame33>
        </Frame3>
        <Divider />
        <Frame4>
          <VerifiedUserIcon />
          <Frame34>
            <Typography variant="body1">Số mũi đã tiêm toàn quốc</Typography>
            <Typography variant="h3">69,523,654 (mũi)</Typography>
          </Frame34>
        </Frame4>
      </AggregateParameters>

      <InjectionSite>
        <ContainerInjectionSite>
          <Title>Tra cứu điểm tiêm theo địa bàn</Title>
          <FormFilter onSubmit={handleSubmit(onSubmit)}>
            <InputComponent>
              <Controller
                {...register('provinceId')}
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel>Tỉnh/Thành phố</InputLabel>
                    <Select
                      id="province"
                      {...field}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                      }}>
                      {provinces.map((province) => (
                        <MenuItem key={province.id} value={province.id}>
                          {province.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </InputComponent>
            <InputComponent>
              <Controller
                {...register('districtId')}
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel>Quận/Huyện</InputLabel>
                    <Select
                      id="district"
                      {...field}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                      }}>
                      {filterDistricts.map((district) => (
                        <MenuItem key={district.id} value={district.id}>
                          {district.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </InputComponent>
            <InputComponent>
              <Controller
                {...register('wardId')}
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel>Xã/Phường</InputLabel>
                    <Select
                      id="ward"
                      {...field}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                      }}>
                      {filterWards.map((ward) => (
                        <MenuItem key={ward.id} value={ward.id}>
                          {ward.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </InputComponent>
            <ButtonSubmit startIcon={<SearchIcon />} type="submit">
              Tìm kiếm
            </ButtonSubmit>
          </FormFilter>
        </ContainerInjectionSite>
      </InjectionSite> */}

      <Footer>
        <Frame18>
          <Typography
            variant="body2"
            sx={{
              width: '590px',
              height: '20px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '143%',
              letterSpacing: '-0.04px',
              color: '#FFFFFF'
            }}>
            © Bản quyền thuộc
            <span className="span1">
              {' '}
              TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA
            </span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: '129px',
              height: '20px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '143%',
              letterSpacing: '-0.04px',
              color: '#FFFFFF'
            }}>
            Phát triển bởi <span className="span2">Viettel</span>
          </Typography>
          <ContainerLogos>
            <Logo2in1 src={logo2in1} alt="" />
          </ContainerLogos>
        </Frame18>
        <Frame19>
          <Typography
            variant="body2"
            sx={{
              height: '20px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '143%',
              letterSpacing: '-0.04px',
              color: '#FFFFFF'
            }}>
            Tải sổ sức khỏe điện tử để đăng ký tiêm và nhận giấy chứng nhận tiêm
          </Typography>
          <ContainerButtonApp>
            <ButtonAppForHCM>
              <span>App tiêm di động (Cho HCM)</span>
            </ButtonAppForHCM>
            <ButtonAppStore>
              <span>App Store</span>
            </ButtonAppStore>
            <ButtonGGPlay>
              <span>Google play</span>
            </ButtonGGPlay>
          </ContainerButtonApp>
          <Cert src={handle_cert1} alt="" />
        </Frame19>
      </Footer>
    </HomePage>
  );
};

export default Home;
