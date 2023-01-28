import { InputsSearch } from './../AdminDocuments';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';

export const findDocument = async (condition: InputsSearch) => {
  const res = await api.get<Document[]>('/document/condition', {
    params: condition
  });
  return res.data;
};

export const useFilterDocumentsQuery = (condition: InputsSearch) => {
  return useQuery({
    queryKey: [QueryKey.getDocument],
    queryFn: async () => findDocument(condition),
    enabled: false
  });
};
