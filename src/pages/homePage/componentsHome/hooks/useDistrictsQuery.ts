import { findDistricts } from './../InjectionSite';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';

export const useDistrictsQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getDistricts],
    queryFn: async () => findDistricts
  });
};
