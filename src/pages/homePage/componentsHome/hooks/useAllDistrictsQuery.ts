import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';
import { District } from '../InjectionSite';

export const findAllDistricts = async () => {
  const res = await api.get<District[]>('/administrative-unit/districts');
  return res.data;
};

export const useAllDistrictsQuery = () => {
  const { data } = useQuery({
    queryKey: [QueryKey.getAllDistricts],
    queryFn: findAllDistricts
  });
  return data;
};
