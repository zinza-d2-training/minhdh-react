import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';
import { Inputs, VaccinationSites } from '../InjectionSite';

export const findVaccinationSites = async (dataInputs: Inputs) => {
  const res = await api.get<VaccinationSites[]>(
    '/vaccination-sites/condition',
    {
      params: dataInputs
    }
  );
  return res.data;
};

export const useVaccinationSitesQuery = (dataInputs: Inputs) => {
  return useQuery({
    queryKey: [QueryKey.getVaccinationSites, dataInputs],
    queryFn: async () => findVaccinationSites(dataInputs),
    enabled: false
  });
};
