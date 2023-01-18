import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';
import {
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import { useDistrictsQuery } from '../../homePage/componentsHome/hooks/useDistrictsQuery';
import { useProvincesQuery } from '../../homePage/componentsHome/hooks/useProvincesQuery';
import { useWardsQuery } from '../../homePage/componentsHome/hooks/useWardsQuery';
import { useAllDistrictsQuery } from '../../vaccineRegistrationPage/hooks/useAllDistrictsQuery';
import { useAllWardsQuery } from '../../vaccineRegistrationPage/hooks/useAllWardsQuery';
import InputLabel from '@mui/material/InputLabel';

const FormEditInfo = styled.form``;

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 8px;
  gap: 16px;
  width: 1368px;
  height: 80px;
  background: #ffffff;
`;

const ContentSection1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  gap: 16px;
  width: 1352px;
  height: 69px;
`;

const RowInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1320px;
  height: 69px;
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 8px;
  gap: 16px;
  width: 1352px;
  height: 206px;
  background: #ffffff;
`;

const ContentSection2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  gap: 16px;
  width: 1352px;
  height: 206px;
`;

const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 318px;
  height: 69px;
  background: #ffffff;
  & .inputBirthday {
    width: 100%;
    border-radius: 4px;
  }
  & .helpText {
    margin: 0 0 0 13px;
    font-size: 12px;
    position: relative;
    color: grey;
    top: 3px;
    line-height: 20px;
  }
`;

const Label = styled.label`
  width: 318px;
  height: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
`;

const DateBirthday = styled.div`
  width: 100%;
`;

const ButtonCancel = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 16px;
  gap: 8px;
  width: 90px;
  height: 36px;
  border: 1px solid #3f51b5;
`;

const ButtonSave = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 16px;
  gap: 8px;
  width: 60px;
  height: 36px;
  background: #3f51b5;
`;

interface InputsInfo {
  identity_card_number: string;
  name: string;
  birthday: Date;
  gender: string;
  province_id: number;
  district_id: number;
  ward_id: number;
}

interface Province {
  id: number;
  name: string;
}

interface District {
  id: number;
  name: string;
  province_id: number;
}

interface Ward {
  id: number;
  name: string;
  district_id: number;
}

interface MyProps {
  editInfo?: boolean;
}

const EditInfo: React.FC<MyProps> = (props) => {
  const schemaInfo = Yup.object().shape({
    identity_card_number: Yup.string()
      .required('Số CMND/CCCD không được bỏ trống')
      .min(12, 'Số CMND/CCCD không hợp lệ'),
    name: Yup.string().required('Họ và tên không được bỏ trống'),
    birthday: Yup.date().required('Ngày sinh không được bỏ trống'),
    gender: Yup.string().required('Giới tính không được bỏ trống'),
    province_id: Yup.number().required('Tỉnh/Thành phố không được bỏ trống'),
    district_id: Yup.number().required('Quận/Huyện không được bỏ trống'),
    ward_id: Yup.number().required('Phường/Xã không được bỏ trống')
  });

  const validationOpt = {
    resolver: yupResolver(schemaInfo)
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid }
  } = useForm<InputsInfo>(validationOpt);

  const province_id = watch('province_id');
  const district_id = watch('district_id');
  const currentUser = useCurrentUser();

  const onSubmit = () => {};

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
    return provinces.find(
      (element: Province) => element.id === district?.province_id
    )?.name;
  };

  const provincesQuery = useProvincesQuery();
  const allDistrictsQuery = useAllDistrictsQuery();
  const allWardsQuery = useAllWardsQuery();
  const districtsQuery = useDistrictsQuery(province_id);
  const wardsQuery = useWardsQuery(district_id);

  const provinces = React.useMemo(() => {
    return provincesQuery.data ?? [];
  }, [provincesQuery.data]);

  const districts = React.useMemo(() => {
    return districtsQuery.data ?? [];
  }, [districtsQuery.data]);

  const wards = React.useMemo(() => {
    return wardsQuery.data ?? [];
  }, [wardsQuery.data]);

  const allDistricts = React.useMemo(() => {
    return allDistrictsQuery.data ?? [];
  }, [allDistrictsQuery.data]);

  const allWards = React.useMemo(() => {
    return allWardsQuery.data ?? [];
  }, [allWardsQuery.data]);

  return (
    <FormEditInfo onSubmit={handleSubmit(onSubmit)}>
      <Section1>
        <ContentSection1>
          <RowInputs>
            <InputComponent>
              <Label htmlFor="identity_card_number">
                Số CMND/CCCD/Mã định danh
              </Label>
              <TextField
                {...register('identity_card_number')}
                inputProps={{
                  readOnly: !props.editInfo
                }}
                disabled={!props.editInfo}
                size="small"
                helperText={
                  errors.identity_card_number?.message &&
                  errors.identity_card_number.message
                }
                type="text"
                id="identity_card_number"
                sx={{
                  width: '100%'
                }}
                required
                defaultValue={currentUser?.identity_card_number}
              />
            </InputComponent>
          </RowInputs>
        </ContentSection1>
      </Section1>
      <Section2>
        <ContentSection2>
          <RowInputs>
            <InputComponent>
              <Label htmlFor="name">Họ và tên</Label>
              <TextField
                {...register('name')}
                inputProps={{
                  readOnly: !props.editInfo
                }}
                disabled={!props.editInfo}
                size="small"
                helperText={errors.name?.message && errors.name.message}
                type="text"
                id="name"
                sx={{
                  width: '100%'
                }}
                required
                defaultValue={currentUser?.name}
              />
            </InputComponent>
            <InputComponent>
              <Label htmlFor="birthday">Ngày sinh</Label>
              <Controller
                control={control}
                {...register('birthday')}
                name="birthday"
                render={({ field: { value, ...fieldProps } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateBirthday>
                      <DatePicker
                        {...fieldProps}
                        readOnly={!props.editInfo}
                        disableFuture
                        label="Ngày sinh"
                        value={value || currentUser?.birthday}
                        className="inputBirthday"
                        renderInput={(params) => (
                          <TextField {...params} size="small" />
                        )}
                      />
                    </DateBirthday>
                  </LocalizationProvider>
                )}
              />
            </InputComponent>
            <InputComponent>
              <Label htmlFor="gender">Giới tính</Label>
              <TextField
                disabled={!props.editInfo}
                {...register('gender')}
                inputProps={{
                  readOnly: !props.editInfo
                }}
                size="small"
                helperText={errors.gender?.message && errors.gender.message}
                type="text"
                id="gender"
                sx={{
                  width: '100%'
                }}
                required
                defaultValue={currentUser?.gender}
              />
            </InputComponent>
          </RowInputs>
          <RowInputs>
            <InputComponent>
              <Label htmlFor="province">Tỉnh/Thành phố</Label>
              <Controller
                {...register('province_id')}
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl fullWidth>
                    <InputLabel>
                      {findNameProvince(currentUser?.ward_id)}
                    </InputLabel>
                    <Select
                      inputProps={{
                        readOnly: !props.editInfo
                      }}
                      size="small"
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
                    <p className="helpText">{fieldState.error?.message}</p>
                  </FormControl>
                )}
              />
            </InputComponent>
            <InputComponent>
              <Label>Quận/Huyện</Label>
              <Controller
                {...register('district_id')}
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl fullWidth>
                    <InputLabel>
                      {findNameDistrict(currentUser?.ward_id)}
                    </InputLabel>
                    <Select
                      inputProps={{
                        readOnly: !props.editInfo
                      }}
                      size="small"
                      id="district"
                      {...field}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                      }}>
                      {districts.map((district) => (
                        <MenuItem key={district.id} value={district.id}>
                          {district.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <p className="helpText">{fieldState.error?.message}</p>
                  </FormControl>
                )}
              />
            </InputComponent>
            <InputComponent>
              <Label htmlFor="ward">Xã/Phường</Label>
              <Controller
                {...register('ward_id')}
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl fullWidth>
                    <InputLabel>
                      {findNameWard(currentUser?.ward_id)}
                    </InputLabel>
                    <Select
                      inputProps={{
                        readOnly: !props.editInfo
                      }}
                      size="small"
                      id="ward"
                      {...field}
                      onChange={(event) => {
                        field.onChange(event.target.value);
                      }}>
                      {wards.map((ward) => (
                        <MenuItem key={ward.id} value={ward.id}>
                          {ward.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <p className="helpText">{fieldState.error?.message}</p>
                  </FormControl>
                )}
              />
            </InputComponent>
          </RowInputs>
          <RowInputs>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ButtonCancel>
                <Typography
                  sx={{
                    width: '60px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '24px',
                    letterSpacing: '0.46px',
                    textTransform: 'uppercase',
                    color: '#3F51B5'
                  }}>
                  Hủy Bỏ
                </Typography>
              </ButtonCancel>
            </Link>
            <ButtonSave
              disabled={!isValid}
              type="submit"
              sx={{
                width: '30px',
                height: '24px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '24px',
                letterSpacing: '0.46px',
                textTransform: 'uppercase',
                color: 'white'
              }}>
              Lưu
            </ButtonSave>
          </RowInputs>
        </ContentSection2>
      </Section2>
    </FormEditInfo>
  );
};

export default EditInfo;
