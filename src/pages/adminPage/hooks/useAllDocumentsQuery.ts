import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';
import { Document } from './../AdminDocuments';

export const findAllDocuments = async () => {
  const res = await api.get<Document[]>('/documents');
  return res.data;
};

export const useAllDocumentsQuery = () => {
  return useQuery({
    queryKey: [QueryKey.getAllDocuments],
    queryFn: findAllDocuments
  });
};
