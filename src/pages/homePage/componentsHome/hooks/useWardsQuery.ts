import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';
import { Ward } from '../InjectionSite';

export const findWards = async (id: number | null | undefined) => {
  const res = await api.get<Ward[]>(`/administrative-unit/wards/${id}`);
  return res.data;
};

export const useWardsQuery = (id: number | null | undefined) => {
  return useQuery({
    queryKey: [QueryKey.getWards, id],
    queryFn: async () => findWards(id),
    enabled: !!id
  });
};
