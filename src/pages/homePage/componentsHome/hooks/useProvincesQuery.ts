import { findProvinces } from './../InjectionSite';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';

export const useProvincesQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getProvinces],
    queryFn: async () => findProvinces
  });
};
