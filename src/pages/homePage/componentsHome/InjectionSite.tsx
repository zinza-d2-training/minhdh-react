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
import { useMutation } from '@tanstack/react-query';
import api from '../../../utils/axios/instance';
import {
  findAllVaccinationSites,
  useVaccinationSitesQuery
} from './hooks/useVaccinationSitesQuery';
import {
  findAllDistricts,
  useAllDistrictsQuery
} from './hooks/useAllDistrictsQuery';
import { findAllWards, useAllWardsQuery } from './hooks/useAllWardsQuery';
import { findDistricts, useDistrictsQuery } from './hooks/useDistrictsQuery';
import { findWards, useWardsQuery } from './hooks/useWardsQuery';
import { findProvinces } from './hooks/useProvincesQuery';

const Injection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  width: 1447px;
  height: 580px;
  margin-top: 200px;
  margin-bottom: 70px;
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

export interface VaccinationSites {
  id: number;
  name: string;
  address: string;
  ward_id: number;
  leader: string;
  number_table: number;
}

type Inputs = {
  province_id?: number;
  district_id?: number;
  ward_id?: number;
};

export interface Province {
  id: number;
  name: string;
}

export interface District {
  id: number;
  name: string;
  province_id: number;
}

export interface Ward {
  id: number;
  name: string;
  district_id: number;
}

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

export const findVaccinationSites = async (dataInputs: Inputs) => {
  const res = await api.get<VaccinationSites[]>(
    '/vaccination-sites/condition',
    {
      params: dataInputs
    }
  );
  return res.data;
};

const InjectionSites = () => {
  const formSchema = Yup.object().shape({
    province_id: Yup.number(),
    district_id: Yup.number(),
    ward_id: Yup.number()
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const { register, handleSubmit, watch, control } =
    useForm<Inputs>(validationOpt);

  const province_id = watch('province_id');
  const district_id = watch('district_id');
  const ward_id = watch('ward_id');

  const findNameWard = (id: Number) => {
    return allWards.find((element: Ward) => element.id === id)?.name;
  };

  const findNameDistrict = (id: Number) => {
    const ward = allWards.find((element: Ward) => element.id === id);
    return allDistricts.find((element: District) => element.id === ward?.id)
      ?.name;
  };

  const findNameProvince = (id: Number) => {
    const ward = allWards.find((element: Ward) => element.id === id);
    const district = allDistricts.find(
      (element: District) => element.id === ward?.district_id
    );
    return provinces.find(
      (element: Province) => element.id === district?.province_id
    )?.name;
  };

  const [provinces, setProvinces] = React.useState<Province[]>([]);
  const [districts, setDistricts] = React.useState<District[]>([]);
  const [wards, setWards] = React.useState<Ward[]>([]);
  const [injectionSitesRow, setInjectionSitesRow] = React.useState<
    VaccinationSites[]
  >([]);

  const [allDistricts, setAllDistricts] = React.useState<District[]>([]);
  const [allWards, setAllWards] = React.useState<Ward[]>([]);

  React.useEffect(() => {
    const getProvinces = async () => {
      const result = await findProvinces();
      setProvinces(result);
    };
    getProvinces();
  }, []);

  React.useEffect(() => {
    if (province_id) {
      const getDistricts = async () => {
        const result = await findDistricts(province_id);
        setDistricts(result);
      };
      getDistricts();
    }
  }, [province_id]);

  React.useEffect(() => {
    if (district_id) {
      const getWards = async () => {
        const result = await findWards(district_id);
        setWards(result);
      };
      getWards();
    }
  }, [district_id]);

  React.useEffect(() => {
    const getAllDistricts = async () => {
      const result = await findAllDistricts();
      setAllDistricts(result);
    };
    getAllDistricts();
  }, []);

  React.useEffect(() => {
    const getAllWards = async () => {
      const result = await findAllWards();
      setAllWards(result);
    };
    getAllWards();
  }, []);

  React.useEffect(() => {
    const getAllVaccinationSites = async () => {
      const result = await findAllVaccinationSites();
      setInjectionSitesRow(result);
    };
    getAllVaccinationSites();
  }, []);

  useVaccinationSitesQuery();

  useDistrictsQuery();

  useWardsQuery();

  useAllDistrictsQuery();

  useAllWardsQuery();

  useVaccinationSitesQuery();

  const { mutate, data } = useMutation({
    mutationFn: (dataInputs: Inputs) => {
      return findVaccinationSites(dataInputs);
    }
  });

  const dataForm: Inputs = {
    province_id: province_id,
    district_id: district_id,
    ward_id: ward_id
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    mutate(dataForm);
  };

  React.useEffect(() => {
    if (data) {
      setInjectionSitesRow(data);
    }
  }, [data]);

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
            Tra c???u ??i???m ti??m theo ?????a b??n
          </Typography>
        </TitleInjectionSite>
        <FormFilter onSubmit={handleSubmit(onSubmit)}>
          <InputComponent>
            <Controller
              {...register('province_id')}
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>T???nh/Th??nh ph???</InputLabel>
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
              {...register('district_id')}
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Qu???n/Huy???n</InputLabel>
                  <Select
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
                </FormControl>
              )}
            />
          </InputComponent>
          <InputComponent>
            <Controller
              {...register('ward_id')}
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>X??/Ph?????ng</InputLabel>
                  <Select
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
                </FormControl>
              )}
            />
          </InputComponent>
          <ButtonSubmit type="submit">
            <SearchIcon />
            <span>T??m ki???m</span>
          </ButtonSubmit>
        </FormFilter>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">STT</StyledTableCell>
                <StyledTableCell align="center">T??n ??i???m ti??m</StyledTableCell>
                <StyledTableCell align="center">
                  S??? nh??, t??n ???????ng
                </StyledTableCell>
                <StyledTableCell align="center">X??/Ph?????ng</StyledTableCell>
                <StyledTableCell align="center">Qu???n/Huy???n</StyledTableCell>
                <StyledTableCell align="center">T???nh/Th??nh ph???</StyledTableCell>
                <StyledTableCell align="center">
                  Ng?????i ?????ng ?????u c?? s??? ti??m ch???ng
                </StyledTableCell>
                <StyledTableCell align="center">S??? b??n ti??m</StyledTableCell>
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
                  <StyledTableCell align="center" component="th" scope="row">
                    {element.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {findNameWard(element.ward_id)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {findNameDistrict(element.ward_id)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {findNameProvince(element.ward_id)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.leader}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.number_table}
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
                  rowsPerPageOptions={[5, 10]}
                  colSpan={8}
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
