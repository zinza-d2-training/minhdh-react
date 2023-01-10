import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';
import { District } from '../InjectionSite';

export const findDistricts = async (id: number) => {
  const res = await api.get<District[]>(`/administrative-unit/districts/${id}`);
  return res.data;
};

export const useDistrictsQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getDistricts],
    queryFn: async () => findDistricts
  });
};
