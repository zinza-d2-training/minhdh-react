import {
  Typography,
  Button,
  TextField,
  Pagination,
  PaginationItem,
  Slide,
  Dialog
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
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid';
import { useAllDocumentsQuery } from './hooks/useAllDocumentsQuery';
import moment from 'moment';
import { TransitionProps } from '@mui/material/transitions';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import api from '../../utils/axios/instance';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';

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

const ItemCert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 89px;
  height: 64px;
  background: #ffffff;
`;

const ItemResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 73px;
  height: 64px;
  background: #ffffff;
`;

const ItemAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 67px;
  height: 64px;
  background: #ffffff;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.87);
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
  height: 200px;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 24px;
  width: 98%;
  height: 200px;
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

export interface Document {
  id: number;
  name: string;
  date_release: Date;
  link: string;
}

export type Inputs = {
  name: string;
  date_release: Date;
  link: string;
};

export interface InputsSearch {
  name: string | null | undefined;
}

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'STT',
    width: 250,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'name',
    headerName: 'Tên tài liệu',
    minWidth: 500,
    headerAlign: 'center',
    align: 'center'
  },

  {
    field: 'date_release',
    headerName: 'Ngày phát hành',
    minWidth: 400,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params: any) => {
      return moment(params.row.date_release).format('DD/MM/YYYY');
    }
  },
  {
    field: 'link',
    headerName: 'Link tài liệu',
    minWidth: 300,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params: any) => {
      return (
        <div>
          <a href={params.row.link}>
            <LinkIcon />
          </a>
        </div>
      );
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

const AdminDocuments = () => {
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Tên tài liệu không được bỏ trống'),
    date_release: Yup.date().required('Ngày phát hành không được bỏ trống'),
    link: Yup.string().required('Link tài liệu không được bỏ trống')
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid }
  } = useForm<Inputs>(validationOpt);
  const [filterName, setFilterName] = React.useState('');

  const allDocumentsQuery = useAllDocumentsQuery();
  const [dataRows, setDataRows] = React.useState<Document[]>([]);

  const allDocuments = React.useMemo(() => {
    return allDocumentsQuery.data ?? [];
  }, [allDocumentsQuery.data]);

  React.useEffect(() => {
    setDataRows(allDocuments);
  }, [allDocuments]);

  const onFilter = async () => {
    if (filterName) {
      const result = allDocuments.filter((item) => item.name === filterName);
      setDataRows(result);
    } else {
      setDataRows(allDocuments);
    }
  };

  const updateDocument = async (dataUpdate: Inputs) => {
    const res = await api.post(`/document/${rowSelected?.id}`, dataUpdate);
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

  const name = watch('name');
  const link = watch('link');
  const date_release = watch('date_release');

  const formUpdate: Inputs = {
    name: name,
    date_release: date_release,
    link: link
  };

  const onSubmitUpdate = async () => {
    mutate(formUpdate);
    setOpen(false);
    allDocumentsQuery.refetch();
  };

  const [rowSelected, setRowSelected] = React.useState<Document>();
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (rowSelected) {
      setValue('name', rowSelected?.name as string);
      setValue('date_release', rowSelected?.date_release as Date);
      setValue('link', rowSelected?.link as string);
    }
  }, [rowSelected, setValue]);

  const handleClickOpen = (param: Document) => {
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
            <ItemCert>
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
            </ItemCert>
          </Link>
          <Link to="/admin-register" style={{ textDecoration: 'none' }}>
            <ItemResult>
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
                Đăng ký
              </Typography>
            </ItemResult>
          </Link>
          <Link to="/admin-document" style={{ textDecoration: 'none' }}>
            <ItemAccount>
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
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Tài liệu
              </Typography>
            </ItemAccount>
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
              placeholder="Tên tài liệu"
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
            onRowClick={(param) => handleClickOpen(param.row as Document)}
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
              Cập Nhật Tài Liệu
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
                <Label htmlFor="name">Tên tài liệu</Label>
                <TextField
                  {...register('name')}
                  size="small"
                  helperText={errors.name?.message && errors.name.message}
                  type="text"
                  id="name"
                  placeholder="Tên tài liệu"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="link">Link</Label>
                <TextField
                  {...register('link')}
                  helperText={errors.link?.message && errors.link.message}
                  size="small"
                  type="text"
                  id="link"
                  placeholder="Link"
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

export default AdminDocuments;
