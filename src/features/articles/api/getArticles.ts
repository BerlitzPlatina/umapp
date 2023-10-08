import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { type ExtractFnReturnType, type QueryConfig } from '../../../lib/react-query';

import type { Article } from '../types';

export const getArticles = async (): Promise<Article[]> => {
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
