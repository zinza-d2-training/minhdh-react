import { useQuery } from '@tanstack/react-query';

export const useQueryData = (key: string, func: any) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => func
  });
};
