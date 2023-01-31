import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';
import { Vaccine } from '../VaccineCertificate';

export const findAllVaccine = async () => {
  const res = await api.get<Vaccine[]>('/vaccine');
  return res.data;
};

export const useAllVaccineQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getAllVaccine],
    queryFn: findAllVaccine
  });
};
