import { useQuery } from 'react-query';

import { axios } from '../../../lib/axios';
import { type ExtractFnReturnType, type QueryConfig } from '../../../lib/react-query';

import type { Article } from '../types';

export const getArticles = async ({ discussionId }: { discussionId: string }): Promise<Article[]> => {
  return await axios.get('/articles', {
    params: {
      discussionId
    }
  });
};

type QueryFnType = typeof getArticles;

interface UseCommentsOptions {
  discussionId: string;
  config?: QueryConfig<QueryFnType>;
}

export const useArticles: any = ({ discussionId, config }: UseCommentsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['articles', discussionId],
    queryFn: async () => await getArticles({ discussionId }),
    ...config
  });
};
