import { Ward } from './../InjectionSite';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';

export const findAllWards = async () => {
  const res = await api.get<Ward[]>('/administrative-unit/wards');
  return res.data;
};

export const useAllWardsQuery = () => {
  const { data } = useQuery({
    queryKey: [QueryKey.getAllWards],
    queryFn: findAllWards
  });
  return data;
};
