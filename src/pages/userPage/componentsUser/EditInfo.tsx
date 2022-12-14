import React, { useMemo } from 'react';
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
  cmnd: number;
  name: string;
  birthday: Date;
  gender: string;
  provinceId: number;
  districtId: number;
  wardId: number;
}

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

const provinces: Province[] = [{ id: 1, name: 'Th??nh ph??? H?? N???i' }];

const districts: District[] = [
  { id: 1, name: 'Qu???n Ba ????nh', provinceId: 1 },
  { id: 2, name: 'Qu???n ?????ng ??a ', provinceId: 1 }
];

const wards: Ward[] = [
  { id: 1, name: 'Ph?????ng Ph??c X?? ', districtId: 1 },
  { id: 2, name: 'Ph?????ng Tr??c B???ch ', districtId: 1 },
  { id: 3, name: 'Ph?????ng C??t Linh ', districtId: 2 },
  { id: 4, name: 'Ph?????ng L??ng Th?????ng ', districtId: 2 },
  { id: 5, name: 'Ph?????ng ?? Ch??? D???a', districtId: 2 },
  { id: 6, name: 'Ph?????ng Qu???c T??? Gi??m', districtId: 2 }
];

interface MyProps {
  editInfo?: boolean;
}

const EditInfo: React.FC<MyProps> = (props) => {
  const schemaInfo = Yup.object().shape({
    cmnd: Yup.number()
      .required('S??? CMND/CCCD kh??ng ???????c b??? tr???ng')
      .min(12, 'S??? CMND/CCCD kh??ng h???p l???'),
    name: Yup.string().required('H??? v?? t??n kh??ng ???????c b??? tr???ng'),
    birthday: Yup.date().required('Ng??y sinh kh??ng ???????c b??? tr???ng'),
    gender: Yup.string().required('Gi???i t??nh kh??ng ???????c b??? tr???ng'),
    provinceId: Yup.number().required('T???nh/Th??nh ph??? kh??ng ???????c b??? tr???ng'),
    districtId: Yup.number().required('Qu???n/Huy???n kh??ng ???????c b??? tr???ng'),
    wardId: Yup.number().required('Ph?????ng/X?? kh??ng ???????c b??? tr???ng')
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

  const provinceId = watch('provinceId');
  const districtId = watch('districtId');

  const onSubmit = () => {};

  const filterDistricts: District[] = useMemo(() => {
    return districts.filter((district) => district.provinceId === provinceId);
  }, [provinceId]);

  const filterWards: Ward[] = useMemo(() => {
    return wards.filter((ward) => ward.districtId === districtId);
  }, [districtId]);

  return (
    <FormEditInfo onSubmit={handleSubmit(onSubmit)}>
      <Section1>
        <ContentSection1>
          <RowInputs>
            <InputComponent>
              <Label htmlFor="cmnd">S??? CMND/CCCD/M?? ?????nh danh</Label>
              <TextField
                {...register('cmnd')}
                inputProps={{
                  readOnly: !props.editInfo
                }}
                size="small"
                helperText={errors.cmnd?.message && errors.cmnd.message}
                type="text"
                id="cmnd"
                sx={{
                  width: '100%'
                }}
                required
              />
            </InputComponent>
          </RowInputs>
        </ContentSection1>
      </Section1>
      <Section2>
        <ContentSection2>
          <RowInputs>
            <InputComponent>
              <Label htmlFor="name">H??? v?? t??n</Label>
              <TextField
                {...register('name')}
                inputProps={{
                  readOnly: !props.editInfo
                }}
                size="small"
                helperText={errors.name?.message && errors.name.message}
                type="text"
                id="name"
                sx={{
                  width: '100%'
                }}
                required
              />
            </InputComponent>
            <InputComponent>
              <Label htmlFor="birthday">Ng??y sinh</Label>
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
                        label="Ng??y sinh"
                        value={value}
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
              <Label htmlFor="gender">Gi???i t??nh</Label>
              <TextField
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
              />
            </InputComponent>
          </RowInputs>
          <RowInputs>
            <InputComponent>
              <Label htmlFor="province">T???nh/Th??nh ph???</Label>
              <Controller
                {...register('provinceId')}
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl fullWidth>
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
              <Label>Qu???n/Huy???n</Label>
              <Controller
                {...register('districtId')}
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl fullWidth>
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
                      {filterDistricts.map((district) => (
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
              <Label htmlFor="ward">X??/Ph?????ng</Label>
              <Controller
                {...register('wardId')}
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl fullWidth>
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
                      {filterWards.map((ward) => (
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
                  H???y B???
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
              L??u
            </ButtonSave>
          </RowInputs>
        </ContentSection2>
      </Section2>
    </FormEditInfo>
  );
};

export default EditInfo;
