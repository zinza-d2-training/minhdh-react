import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';
import { Province } from '../../homePage/componentsHome/InjectionSite';

export const findAllProvinces = async () => {
  const res = await api.get<Province[]>('/administrative-unit/provinces');
  return res.data;
};

export const useAllProvincesQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getProvinces],
    queryFn: async () => findAllProvinces
  });
};
