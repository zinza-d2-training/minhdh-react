import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';

export const findAllCustomers = async () => {
  const res = await api.get('/users');
  return res.data;
};

export const useAllCustomersQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getAllUsers],
    queryFn: findAllCustomers
  });
};
