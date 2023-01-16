import { Group } from './../VaccineStep1';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';

export const findGroup = async () => {
  const res = await api.get<Group[]>('/group');
  return res.data;
};

export const useGroupsQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getGroups],
    queryFn: async () => findGroup
  });
};
