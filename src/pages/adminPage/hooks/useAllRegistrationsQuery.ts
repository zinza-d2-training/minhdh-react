import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';
import { VaccineRegistration } from '../AdminRegister';

export const findAllRegistrations = async () => {
  const res = await api.get<VaccineRegistration[]>('/vaccine-registration');
  return res.data;
};

export const useAllRegistrationsQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getAllRegistration],
    queryFn: findAllRegistrations
  });
};
