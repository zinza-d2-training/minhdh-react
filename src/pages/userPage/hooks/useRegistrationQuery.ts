import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';
import { VaccineRegistration } from '../VaccineCertificate';

export const findRegistration = async (id: number | undefined) => {
  const res = await api.get<VaccineRegistration[]>(
    `/vaccine-registration/user/${id}`
  );
  return res.data;
};

export const useRegistrationQuery = (id: number | undefined) => {
  return useQuery({
    queryKey: [QueryKey.getRegistration, id],
    queryFn: async () => findRegistration(id)
  });
};
