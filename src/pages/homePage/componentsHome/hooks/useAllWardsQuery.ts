import { findAllWards } from './../InjectionSite';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';

export const useAllWardsQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getAllWards],
    queryFn: async () => findAllWards
  });
};
