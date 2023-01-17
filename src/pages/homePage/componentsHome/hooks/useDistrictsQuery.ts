import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';
import { District } from '../InjectionSite';

export const findDistricts = async (id: number | null | undefined) => {
  const res = await api.get<District[]>(`/administrative-unit/districts/${id}`);
  return res.data;
};

export const useDistrictsQuery = (id: number | null | undefined) => {
  const { data } = useQuery({
    queryKey: [QueryKey.getDistricts, id],
    queryFn: async () => findDistricts(id)
  });
  return data;
};
