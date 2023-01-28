import {
  Typography,
  Button,
  TextField,
  Pagination,
  PaginationItem,
  Slide,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  GridValueGetterParams,
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid';
import { useAllRegistrationsQuery } from './hooks/useAllRegistrationsQuery';
import { TransitionProps } from '@mui/material/transitions';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
import { useMutation } from '@tanstack/react-query';
import api from '../../utils/axios/instance';
import { useAllVaccineQuery } from './hooks/useAllVaccineQuery';
import { useAllVaccinationSitesQuery } from './hooks/useAllVaccinationSitesQuery';
import moment from 'moment';
import { User } from '../../features/auth/authSlice';
import { Status } from '../../hooks/statusRegistration';

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 36px;
  gap: 16px;
  width: 1447px;
  height: 64px;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 64px;
`;

const ItemLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 89px;
  height: 64px;
  background: #ffffff;
`;

const ItemRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 73px;
  height: 64px;
  background: #ffffff;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.87);
`;

const ItemDocument = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 67px;
  height: 64px;
  background: #ffffff;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #eeeeee;
`;

const ContainerTable = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 12px 0px;
  width: 1519px;
  height: 570px;
  border-top: 1px solid rgba(38, 56, 150, 0.14);
  margin-top: 50px;
  margin-bottom: 200px;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const FormFilter = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 16px;
  gap: 16px;
  width: 1416px;
  height: 56px;
`;

const InputFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 260px;
  height: 40px;
  background: #ffffff;
`;
const ButtonSubmit = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px 16px;
  gap: 8px;
  width: 148px;
  height: 39px;
  background: #171a88;
  border-radius: 8px 8px 8px 0px;
  & > span {
    width: 120px;
    height: 23px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 98%;
  height: 64px;
`;

const TextTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 24px;
  width: 98%;
  height: 64px;
`;

const FormDialog = styled.form``;

const DialogContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 98%;
  height: 400px;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 24px;
  width: 98%;
  height: 400px;
`;

const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 98%;
  height: 69px;
  background: #ffffff;
`;

const Label = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
`;

const DialogActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 24px;
  gap: 16px;
  width: 90%;
  height: 60px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  height: 36px;
  margin-bottom: -30px;
`;

const ButtonCancel = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  gap: 4px;
  width: 100px;
  height: 36px;
  border: 1px solid #303f9f;
  border-radius: 8px 8px 8px 0px;
`;

const ButtonConfirm = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  gap: 4px;
  width: 120px;
  height: 36px;
  background: #303f9f;
  border-radius: 8px 8px 8px 0px;
`;

const ButtonClose = styled(Button)`
  padding-right: 10px; ;
`;

export interface VaccineRegistration {
  id: number;
  numBHYT: string;
  job: string;
  work_unit: string;
  address: string;
  date_injection: Date;
  session_injection: string;
  vaccine_code: string;
  status: number;
  registration_code: string;
  user_id: number;
  group_id: number;
  vaccine_id: number;
  vaccination_site_id: number;
  user: User;
}

export type Inputs = {
  numBHYT: string;
  job: string;
  work_unit: string;
  address: string;
  date_injection: Date;
  session_injection: string;
  vaccine_code: string;
  status: number;
  registration_code: string;
  user_id: number;
  group_id: number;
  vaccine_id: number;
  vaccination_site_id: number;
};

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'STT',
    width: 100,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'name',
    headerName: 'Họ và tên',
    minWidth: 250,
    headerAlign: 'center',
    align: 'center',
    valueGetter: (params: GridValueGetterParams) => params.row.user.name
  },
  {
    field: 'identity_card_number',
    headerName: 'Số CMND/CCCD',
    minWidth: 200,
    type: 'number',
    headerAlign: 'center',
    align: 'center',
    valueGetter: (params: GridValueGetterParams) =>
      params.row.user.identity_card_number
  },
  {
    field: 'date_injection',
    headerName: 'Ngày tiêm dự kiến',
    minWidth: 200,
    headerAlign: 'center',
    align: 'center',
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.date_injection
        ? moment(params.row.date_injection).format('DD/MM/YYYY')
        : 'Chưa có';
    }
  },
  {
    field: 'vaccine_name',
    headerName: 'Loại Vaccine',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.vaccine !== null
        ? params.row.vaccine.name
        : 'Chưa chọn';
    }
  },
  {
    field: 'vaccine_code',
    headerName: 'Số lô',
    minWidth: 50,
    headerAlign: 'center',
    align: 'center',
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.vaccine_code !== null
        ? params.row.vaccine_code
        : 'Chưa chọn';
    }
  },
  {
    field: 'vaccination_site_name',
    headerName: 'Điểm tiêm',
    minWidth: 300,
    headerAlign: 'center',
    align: 'center',
    valueGetter: (params: GridValueGetterParams) =>
      params.row.vaccinationSite !== null
        ? params.row.vaccinationSite.name
        : 'Chưa chọn'
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.status === Status.ACCEPT
        ? 'Chấp nhận'
        : params.row.status === Status.SUCCESS
        ? 'Chờ phê duyệt'
        : 'Hủy bỏ';
    }
  }
];

function PaginationData() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Pagination
      color="primary"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event: React.ChangeEvent<unknown>, value: number) =>
        apiRef.current.setPage(value - 1)
      }
    />
  );
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdminRegister = () => {
  const formSchema = Yup.object().shape({
    numBHYT: Yup.string().required('Số thẻ BHYT không được bỏ trống'),
    job: Yup.string().required('Nghề nghiệp không được bỏ trống'),
    work_unit: Yup.string().required('Đơn vị công tác không được bỏ trống'),
    address: Yup.string().required('Địa chỉ không được bỏ trống'),
    date_injection: Yup.date().required(
      'Ngày đăng ký tiêm không được bỏ trống'
    ),
    session_injection: Yup.string().required('Buổi tiêm không được bỏ trống'),
    status: Yup.number().required('Trạng thái không được bỏ trống'),
    vaccine_code: Yup.string().required('Số lô không được bỏ trống'),
    registration_code: Yup.string().required('Mã đăng ký không được bỏ trống'),
    user_id: Yup.number().required('User không được bỏ trống'),
    group_id: Yup.number().required('Nhóm ưu tiên không được bỏ trống'),
    vaccine_id: Yup.number().required('Tên vaccine không được bỏ trống'),
    vaccination_site_id: Yup.number().required('Điểm tiêm không được bỏ trống')
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { isValid, errors }
  } = useForm<Inputs>(validationOpt);

  const allRegistrationsQuery = useAllRegistrationsQuery();
  const allVaccinesQuery = useAllVaccineQuery();
  const allVaccinationSitesQuery = useAllVaccinationSitesQuery();

  const [filterName, setFilterName] = React.useState('');
  const [filterNumberCard, setFilterNumberCard] = React.useState('');
  const [rowSelected, setRowSelected] = React.useState<VaccineRegistration>();
  const [open, setOpen] = React.useState<boolean>(false);
  const [dataRows, setDataRows] = React.useState<VaccineRegistration[]>([]);

  const allUserRegistrations = React.useMemo(() => {
    return allRegistrationsQuery.data ?? [];
  }, [allRegistrationsQuery.data]);

  const allVaccines = React.useMemo(() => {
    return allVaccinesQuery.data ?? [];
  }, [allVaccinesQuery.data]);

  const allVaccinationSites = React.useMemo(() => {
    return allVaccinationSitesQuery.data ?? [];
  }, [allVaccinationSitesQuery.data]);

  React.useEffect(() => {
    setDataRows(allUserRegistrations);
  }, [allUserRegistrations]);

  const onFilter = () => {
    if (filterName && !filterNumberCard) {
      const result = allUserRegistrations.filter(
        (item) => item.user.name === filterName
      );
      setDataRows(result);
    } else if (filterNumberCard && !filterName) {
      const result = allUserRegistrations.filter(
        (item) => item.user.identity_card_number === filterNumberCard
      );
      setDataRows(result);
    } else if (filterName && filterNumberCard) {
      const result = allUserRegistrations.filter((item) => {
        return (
          item.user.identity_card_number === filterNumberCard &&
          item.user.name === filterName
        );
      });
      setDataRows(result);
    } else {
      setDataRows(allUserRegistrations);
    }
  };

  const updateDocument = async (dataUpdate: Inputs) => {
    const res = await api.post(
      `/vaccine-registration/${rowSelected?.id}`,
      dataUpdate
    );
    return res.data;
  };

  const { mutate, data } = useMutation({
    mutationFn: (dataUpdate: Inputs) => {
      return updateDocument(dataUpdate);
    }
  });

  React.useEffect(() => {
    if (data) {
      alert(data.msg);
    }
  }, [data]);

  const numBHYT = watch('numBHYT');
  const job = watch('job');
  const work_unit = watch('work_unit');
  const address = watch('address');
  const date_injection = watch('date_injection');
  const session_injection = watch('session_injection');
  const vaccine_code = watch('vaccine_code');
  const status = watch('status');
  const registration_code = watch('registration_code');
  const user_id = watch('user_id');
  const group_id = watch('group_id');
  const vaccine_id = watch('vaccine_id');
  const vaccination_site_id = watch('vaccination_site_id');

  const formUpdate: Inputs = {
    numBHYT: numBHYT,
    job: job,
    work_unit: work_unit,
    address: address,
    date_injection: date_injection,
    session_injection: session_injection,
    vaccine_code: vaccine_code,
    status: status,
    registration_code: registration_code,
    user_id: user_id,
    group_id: group_id,
    vaccine_id: vaccine_id,
    vaccination_site_id: vaccination_site_id
  };

  const onSubmitUpdate = async () => {
    mutate(formUpdate);
    setOpen(false);
    allRegistrationsQuery.refetch();
  };

  React.useEffect(() => {
    if (rowSelected) {
      setValue('numBHYT', rowSelected?.numBHYT as string);
      setValue('job', rowSelected?.job as string);
      setValue('work_unit', rowSelected?.work_unit as string);
      setValue('address', rowSelected?.address as string);
      setValue('date_injection', rowSelected?.date_injection as Date);
      setValue('session_injection', rowSelected?.session_injection as string);
      setValue('status', rowSelected?.status as number);
      setValue('vaccine_code', rowSelected?.vaccine_code as string);
      setValue('registration_code', rowSelected?.registration_code as string);
      setValue('user_id', rowSelected?.user_id as number);
      setValue('group_id', rowSelected?.group_id as number);
      setValue('vaccine_id', rowSelected?.vaccine_id as number);
      setValue(
        'vaccination_site_id',
        rowSelected.vaccination_site_id as number
      );
    }
  }, [rowSelected, setValue]);

  const handleClickOpen = (param: VaccineRegistration) => {
    setRowSelected(param);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Header />
      <Menu>
        <ContainerMenu>
          <Link to="/admin-place" style={{ textDecoration: 'none' }}>
            <ItemLocation>
              <Typography
                sx={{
                  width: '73px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#6E6D7A'
                }}>
                Điểm tiêm
              </Typography>
            </ItemLocation>
          </Link>
          <Link to="/admin-register" style={{ textDecoration: 'none' }}>
            <ItemRegister>
              <Typography
                sx={{
                  width: '57px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Đăng ký
              </Typography>
            </ItemRegister>
          </Link>
          <Link to="/admin-document" style={{ textDecoration: 'none' }}>
            <ItemDocument>
              <Typography
                sx={{
                  width: '51px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#6E6D7A'
                }}>
                Tài liệu
              </Typography>
            </ItemDocument>
          </Link>
        </ContainerMenu>
      </Menu>
      <Divider />
      <ContainerTable>
        <FormFilter>
          <InputFilter>
            <TextField
              value={filterName}
              onChange={(e: any) => setFilterName(e.target.value)}
              size="small"
              type="text"
              id="name"
              placeholder="Họ và tên"
              sx={{
                width: '100%'
              }}
            />
          </InputFilter>
          <InputFilter>
            <TextField
              value={filterNumberCard}
              onChange={(e: any) => setFilterNumberCard(e.target.value)}
              size="small"
              type="text"
              id="identity_card_number"
              placeholder="Số CMND/CCCD"
              sx={{
                width: '100%'
              }}
            />
          </InputFilter>
          <ButtonSubmit onClick={onFilter}>
            <SearchIcon />
            <span>Tìm kiếm</span>
          </ButtonSubmit>
        </FormFilter>
        <Data>
          <DataGrid
            onRowClick={(param) =>
              handleClickOpen(param.row as VaccineRegistration)
            }
            disableColumnMenu
            autoPageSize
            autoHeight
            rows={dataRows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            pagination
            components={{ Pagination: PaginationData }}
          />
        </Data>
      </ContainerTable>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <Title>
          <TextTitle>
            <Typography
              sx={{
                width: '300px',
                height: '32px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: '160%',
                letterSpacing: '-0.05px',
                color: 'rgba(0, 0, 0, 0.87)'
              }}>
              Cập Nhật Đăng Ký Tiêm
            </Typography>
          </TextTitle>
          <ButtonClose onClick={handleClose}>
            <CloseIcon htmlColor="rgba(0, 0, 0, 0.54)" />
          </ButtonClose>
        </Title>
        <Divider />
        <FormDialog onSubmit={handleSubmit(onSubmitUpdate)}>
          <DialogContent>
            <ContainerContent>
              <InputComponent>
                <Label htmlFor="vaccine">Loại Vaccine</Label>
                <Controller
                  {...register('vaccine_id')}
                  control={control}
                  render={({ field }) => (
                    <FormControl size="small" fullWidth>
                      <InputLabel className="labelGroup">
                        Loại Vaccine
                      </InputLabel>
                      <Select
                        defaultValue={rowSelected?.vaccine_id}
                        id="vaccine"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event.target.value);
                        }}>
                        {allVaccines.map((vaccine) => (
                          <MenuItem key={vaccine.id} value={vaccine.id}>
                            {vaccine.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="vaccine_code">Số lô</Label>
                <TextField
                  {...register('vaccine_code')}
                  size="small"
                  helperText={
                    errors.vaccine_code?.message && errors.vaccine_code.message
                  }
                  type="text"
                  id="vaccine_code"
                  placeholder="Số lô"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="site">Điểm tiêm</Label>
                <Controller
                  {...register('vaccination_site_id')}
                  control={control}
                  render={({ field }) => (
                    <FormControl size="small" fullWidth>
                      <InputLabel className="labelGroup">Điểm tiêm</InputLabel>
                      <Select
                        id="site"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event.target.value);
                        }}>
                        {allVaccinationSites.map((site) => (
                          <MenuItem key={site.id} value={site.id}>
                            {site.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="status">Trạng thái</Label>
                <Controller
                  {...register('status')}
                  control={control}
                  render={({ field }) => (
                    <FormControl size="small" fullWidth>
                      <InputLabel className="labelGroup">Trạng thái</InputLabel>
                      <Select
                        defaultValue={rowSelected?.status}
                        id="status"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event.target.value);
                        }}>
                        <MenuItem key={Status.CANCEL} value={Status.CANCEL}>
                          Hủy bỏ
                        </MenuItem>
                        <MenuItem key={Status.ACCEPT} value={Status.ACCEPT}>
                          Chấp nhận
                        </MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </InputComponent>
            </ContainerContent>
          </DialogContent>
          <DialogActions>
            <ButtonGroup>
              <ButtonCancel onClick={handleClose}>
                <Typography
                  sx={{
                    width: '70px',
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
                  Hủy Bỏ
                </Typography>
              </ButtonCancel>
              <ButtonConfirm
                type="submit"
                disabled={!isValid}
                variant="contained">
                <Typography
                  sx={{
                    width: '100px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'white'
                  }}>
                  Xác Nhận
                </Typography>
              </ButtonConfirm>
            </ButtonGroup>
          </DialogActions>
        </FormDialog>
      </Dialog>
      <Footer />
    </div>
  );
};

export default AdminRegister;
