import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';
import { District } from '../../homePage/componentsHome/InjectionSite';

export const findAllDistricts = async () => {
  const res = await api.get<District[]>('/administrative-unit/districts');
  return res.data;
};

export const useAllDistrictsQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getAllDistricts],
    queryFn: findAllDistricts
  });
};
