import { InputsSearch } from './../AdminPlace';
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';
import { VaccinationSites } from '../../homePage/componentsHome/InjectionSite';

export const findVaccinationSitesByAdmin = async (dataInputs: InputsSearch) => {
  const res = await api.get<VaccinationSites[]>(
    '/vaccination-sites/condition/admin',
    {
      params: dataInputs
    }
  );
  return res.data;
};

export const useFilterSitesQuery = (dataInputs: InputsSearch) => {
  return useQuery({
    queryKey: [QueryKey.getVaccinationSitesByAdmin],
    queryFn: async () => findVaccinationSitesByAdmin(dataInputs),
    enabled: false
  });
};
