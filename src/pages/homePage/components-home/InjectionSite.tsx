/* eslint-disable array-callback-return */
import {
  Typography,
  Button,
  Table,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TableFooter
} from '@mui/material';
import styled from '@emotion/styled';
import { useForm, Controller } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

const Injection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  position: absolute;
  width: 1447px;
  height: 580px;
  left: 0px;
  top: 1100px;
`;

const ContainerInjectionSite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 12px;
  width: 1368px;
  height: 637px;
  background: #ffffff;
  border: 1px solid rgba(38, 56, 150, 0.14);
  box-shadow: 0px 4px 12px rgba(34, 41, 47, 0.12);
  border-radius: 10px;
`;

const TitleInjectionSite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 10px;
  gap: 10px;
  width: 1344px;
  height: 55px;
`;

const FormFilter = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 16px;
  gap: 16px;
  width: 1344px;
  height: 56px;
`;

const InputComponent = styled.div`
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
  padding: 8px 16px;
  gap: 8px;
  width: 148px;
  height: 54px;
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
  { id: 4, name: 'Phường Láng Thượng ', districtId: 2 },
  { id: 5, name: 'Phường Ô Chợ Dừa', districtId: 2 },
  { id: 6, name: 'Phường Quốc Tử Giám', districtId: 2 }
];

const injectionSitesRow: InjectionLocal[] = [
  {
    id: 1,
    name: 'Bệnh viện Đa khoa Medlatec',
    location: '42-44 Nghĩa Dũng',
    provinceId: 1,
    districtId: 1,
    wardId: 1,
    leader: 'Nguyễn Thị Kim Liên',
    numberOfInjectionTables: 1
  },
  {
    id: 2,
    name: 'Bệnh viện Đa khoa Hồng Ngọc',
    location: '55 Yên Ninh',
    provinceId: 1,
    districtId: 1,
    wardId: 2,
    leader: 'Cao Độc Lập',
    numberOfInjectionTables: 1
  },
  {
    id: 3,
    name: 'Trạm y tế Phường Cát Linh',
    location: '22 Cát Linh',
    provinceId: 1,
    districtId: 2,
    wardId: 3,
    leader: 'Nguyễn Thị Hồng Hoan',
    numberOfInjectionTables: 1
  },
  {
    id: 4,
    name: 'Bệnh viện Nhi Trung Ương',
    location: '18/879 La Thành',
    provinceId: 1,
    districtId: 2,
    wardId: 4,
    leader: 'Lê Kiến Ngãi',
    numberOfInjectionTables: 10
  },
  {
    id: 5,
    name: 'Trạm y tế Phường Ô Chợ Dừa',
    location: '1 Hoàng Cầu',
    provinceId: 1,
    districtId: 2,
    wardId: 5,
    leader: 'Nguyễn Thanh Hà',
    numberOfInjectionTables: 1
  },
  {
    id: 6,
    name: 'Trạm y tế Phường Quốc Tử Giám',
    location: '14 Ngõ Thông Phong',
    provinceId: 1,
    districtId: 2,
    wardId: 6,
    leader: 'Vũ Thị Hồng Mai',
    numberOfInjectionTables: 1
  }
];

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-0.04px',
    color: 'rgba(0, 0, 0, 0.87)'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '143%',
    letterSpacing: '-0.04px',
    color: 'rgba(0, 0, 0, 0.87)'
  }
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(238, 238, 238, 0.4)'
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page">
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page">
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page">
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const InjectionSites = () => {
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

  const filterDistricts: District[] = React.useMemo(() => {
    return districts.filter((district) => district.provinceId === provinceId);
  }, [provinceId]);

  const filterWards: Ward[] = React.useMemo(() => {
    return wards.filter((ward) => ward.districtId === districtId);
  }, [districtId]);

  const findProvince = (provinceId: Number) => {
    return provinces.find((element: Province) => element.id === provinceId)
      ?.name;
  };

  const findDistrict = (districtId: Number) => {
    return districts.find((element: District) => element.id === districtId)
      ?.name;
  };

  const findWard = (wardId: Number) => {
    return wards.find((element: Ward) => element.id === wardId)?.name;
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - injectionSitesRow.length)
      : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Injection>
      <ContainerInjectionSite>
        <TitleInjectionSite>
          <Typography
            sx={{
              width: '280px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              color: '#000000'
            }}>
            Tra cứu điểm tiêm theo địa bàn
          </Typography>
        </TitleInjectionSite>
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
          <ButtonSubmit type="submit">
            <SearchIcon />
            <span>Tìm kiếm</span>
          </ButtonSubmit>
        </FormFilter>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="center">Tên điểm tiêm</StyledTableCell>
                <StyledTableCell align="center">
                  Số nhà, tên đường
                </StyledTableCell>
                <StyledTableCell align="center">Xã/Phường</StyledTableCell>
                <StyledTableCell align="center">Quận/Huyện</StyledTableCell>
                <StyledTableCell align="center">Tỉnh/Thành phố</StyledTableCell>
                <StyledTableCell align="center">
                  Người đứng đầu cơ sở tiêm chủng
                </StyledTableCell>
                <StyledTableCell align="center">Số bàn tiêm</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? injectionSitesRow.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : injectionSitesRow
              ).map((element) => (
                <StyledTableRow
                  key={element.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <StyledTableCell component="th" scope="row">
                    {element.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.location}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {findWard(element.wardId)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {findDistrict(element.districtId)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {findProvince(element.provinceId)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.leader}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.numberOfInjectionTables}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 20, 50, 100]}
                  colSpan={3}
                  count={injectionSitesRow.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page'
                    },
                    native: true
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </ContainerInjectionSite>
    </Injection>
  );
};

export default InjectionSites;
