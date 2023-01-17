import { Province } from './../InjectionSite';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';

export const findProvinces = async () => {
  const res = await api.get<Province[]>('/administrative-unit/provinces');
  return res.data;
};

export const useProvincesQuery = () => {
  const { data } = useQuery({
    queryKey: [QueryKey.getProvinces],
    queryFn: findProvinces
  });
  return data;
};
