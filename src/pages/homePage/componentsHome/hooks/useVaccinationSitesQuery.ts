import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';
import { VaccinationSites } from '../InjectionSite';

export const findAllVaccinationSites = async () => {
  const res = await api.get<VaccinationSites[]>('/vaccination-sites');
  return res.data;
};

export const useVaccinationSitesQuery = () => {
  const { data } = useQuery({
    queryKey: [QueryKey.getAllVaccinationSites],
    queryFn: findAllVaccinationSites
  });
  return data;
};
