import {
  Typography,
  Button,
  TextField,
  Pagination,
  PaginationItem,
  Dialog,
  Slide
} from '@mui/material';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid';
import { TransitionProps } from '@mui/material/transitions';

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
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.87);
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

const FormDialog = styled.div``;

const DialogContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 98%;
  height: 396px;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 24px;
  width: 98%;
  height: 396px;
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

type Inputs = {
  name: string;
  location: string;
  leader: string;
  numberOfInjectionTables: number;
};

interface InjectionLocal {
  id: number;
  name: string;
  location: string;
  provinceId: number;
  districtId: number;
  wardId: number;
  leader: string;
  numberOfInjectionTables: number;
}

const injectionSitesRow: InjectionLocal[] = [
  {
    id: 1,
    name: 'B???nh vi???n ??a khoa Medlatec',
    location: '42-44 Ngh??a D??ng',
    provinceId: 1,
    districtId: 1,
    wardId: 1,
    leader: 'Nguy???n Th??? Kim Li??n',
    numberOfInjectionTables: 1
  },
  {
    id: 2,
    name: 'B???nh vi???n ??a khoa H???ng Ng???c',
    location: '55 Y??n Ninh',
    provinceId: 1,
    districtId: 1,
    wardId: 2,
    leader: 'Cao ?????c L???p',
    numberOfInjectionTables: 1
  },
  {
    id: 3,
    name: 'Tr???m y t??? Ph?????ng C??t Linh',
    location: '22 C??t Linh',
    provinceId: 1,
    districtId: 2,
    wardId: 3,
    leader: 'Nguy???n Th??? H???ng Hoan',
    numberOfInjectionTables: 1
  },
  {
    id: 4,
    name: 'B???nh vi???n Nhi Trung ????ng',
    location: '18/879 La Th??nh',
    provinceId: 1,
    districtId: 2,
    wardId: 4,
    leader: 'L?? Ki???n Ng??i',
    numberOfInjectionTables: 10
  },
  {
    id: 5,
    name: 'Tr???m y t??? Ph?????ng ?? Ch??? D???a',
    location: '1 Ho??ng C???u',
    provinceId: 1,
    districtId: 2,
    wardId: 5,
    leader: 'Nguy???n Thanh H??',
    numberOfInjectionTables: 1
  },
  {
    id: 6,
    name: 'Tr???m y t??? Ph?????ng Qu???c T??? Gi??m',
    location: '14 Ng?? Th??ng Phong',
    provinceId: 1,
    districtId: 2,
    wardId: 6,
    leader: 'V?? Th??? H???ng Mai',
    numberOfInjectionTables: 1
  }
];

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
    headerName: 'T??n ??i???m ti??m',
    minWidth: 400,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'location',
    headerName: '?????a ch???',
    minWidth: 400,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'leader',
    headerName: 'Ng?????i ?????ng ?????u c?? s??? ti??m ch???ng',
    type: 'string',
    minWidth: 400,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'numberOfInjectionTables',
    headerName: 'S??? b??n ti??m',
    minWidth: 150,
    type: 'number',
    headerAlign: 'center',
    align: 'center'
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

const AdminPlace = () => {
  const formSchema = Yup.object().shape({
    name: Yup.string().required('T??n ??i???m ti??m kh??ng ???????c b??? tr???ng'),
    location: Yup.string().required('?????a ??i???m kh??ng ???????c b??? tr???ng'),
    leader: Yup.string().required(
      'Ng?????i ?????ng ?????u c?? s??? ti??m kh??ng ???????c b??? tr???ng'
    ),
    numberOfInjectionTables: Yup.number()
      .required('S??? b??n ti??m kh??ng ???????c b??? tr???ng')
      .min(1, 'B??n ti??m ph???i l???n h??n 0')
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid }
  } = useForm<Inputs>(validationOpt);

  const onSubmitUpdate = () => {};

  const [rowSelected, setRowSelected] = React.useState<InjectionLocal>();
  const [open, setOpen] = React.useState<boolean>(false);
  const filterData = () => {};

  React.useEffect(() => {
    if (rowSelected) {
      setValue('name', rowSelected?.name as string);
      setValue('location', rowSelected?.location as string);
      setValue('leader', rowSelected?.leader as string);
      setValue(
        'numberOfInjectionTables',
        rowSelected?.numberOfInjectionTables as number
      );
    }
  }, [rowSelected, setValue]);

  const handleClickOpen = (param: InjectionLocal) => {
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
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                ??i???m ti??m
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
                  color: '#6E6D7A'
                }}>
                ????ng k??
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
                T??i li???u
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
              size="small"
              type="text"
              id="name"
              placeholder="??i???m ti??m"
              sx={{
                width: '100%'
              }}
            />
          </InputFilter>
          <InputFilter>
            <TextField
              size="small"
              type="text"
              id="location"
              placeholder="?????a ch???"
              sx={{
                width: '100%'
              }}
            />
          </InputFilter>
          <ButtonSubmit onClick={filterData}>
            <SearchIcon />
            <span>T??m ki???m</span>
          </ButtonSubmit>
        </FormFilter>
        <Data>
          <DataGrid
            disableColumnMenu
            onRowClick={(param) => handleClickOpen(param.row as InjectionLocal)}
            autoPageSize
            autoHeight
            rows={injectionSitesRow}
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
                width: '184px',
                height: '32px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: '160%',
                letterSpacing: '-0.05px',
                color: 'rgba(0, 0, 0, 0.87)'
              }}>
              C???p Nh???t ??i???m Ti??m
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
                <Label htmlFor="name">H??? v?? t??n</Label>
                <TextField
                  {...register('name')}
                  size="small"
                  helperText={errors.name?.message && errors.name.message}
                  type="text"
                  id="name"
                  placeholder="T??n ??i???m ti??m"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="location">?????a ch???</Label>
                <TextField
                  {...register('location')}
                  size="small"
                  helperText={
                    errors.location?.message && errors.location.message
                  }
                  type="text"
                  id="location"
                  placeholder="?????a ch???"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="leader">Ng?????i ?????ng ?????u c?? s???</Label>
                <TextField
                  {...register('leader')}
                  size="small"
                  helperText={errors.leader?.message && errors.leader.message}
                  type="text"
                  id="leader"
                  placeholder="Ng?????i ?????ng ?????u c?? s???"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="numberOfInjectionTables">S??? b??n ti??m</Label>
                <TextField
                  {...register('numberOfInjectionTables')}
                  size="small"
                  helperText={
                    errors.numberOfInjectionTables?.message &&
                    errors.numberOfInjectionTables.message
                  }
                  type="text"
                  id="numberOfInjectionTables"
                  placeholder="S??? b??n ti??m"
                  sx={{
                    width: '100%'
                  }}
                  required
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
                  H???y B???
                </Typography>
              </ButtonCancel>
              <ButtonConfirm type="submit" disabled={!isValid}>
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
                  X??c Nh???n
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

export default AdminPlace;
