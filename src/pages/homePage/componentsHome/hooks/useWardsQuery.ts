import { findWards } from './../InjectionSite';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';

export const useWardsQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getWards],
    queryFn: async () => findWards
  });
};
