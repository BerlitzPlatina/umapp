import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { type ExtractFnReturnType, type QueryConfig } from '../../../lib/react-query';

import type { Article } from '../types';
import type { AxiosResponse } from 'axios';

export const getArticles = async (): Promise<AxiosResponse<Article[]>> => {
  return await axios.get('/articles', {
    params: {
      // discussionId
    }
  });
};

type QueryFnType = typeof getArticles;

interface UseArticlesOptions {
  // discussionId: string;
  config?: QueryConfig<QueryFnType>;
}

export const useArticles: any = ({ config }: UseArticlesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['articles'],
    queryFn: async () => await getArticles(/* { discussionId } */),
    ...config
  });
};
