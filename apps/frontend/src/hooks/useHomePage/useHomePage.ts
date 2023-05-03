import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { StrapiHomPageResponse } from '@/types';

import { content } from './constants';

const url = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337/api/';

export const mapHomePage = (data: StrapiHomPageResponse) => {
  if (!data) return { content, header: { title: 'CloudDrive' } };

  return {
    content,
    header: { title: 'CloudDrive' },
  };
};

export const useHomePage = () => {
  const { data } = useQuery({
    queryKey: ['home-page'],
    queryFn: () =>
      axios.get(`${url}home-page?populate=deep`).then((res) => res.data),
  });

  return mapHomePage(data);
};
