import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import { findAllDistricts } from '../InjectionSite';

export const useAllDistrictsQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getAllDistricts],
    queryFn: async () => findAllDistricts
  });
};
