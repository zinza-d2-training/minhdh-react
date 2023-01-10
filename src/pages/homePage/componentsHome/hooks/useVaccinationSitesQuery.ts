import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import { findProvinces } from '../InjectionSite';

export const useVaccinationSitesQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getProvinces],
    queryFn: async () => findProvinces
  });
};
