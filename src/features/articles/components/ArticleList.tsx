import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getArticles } from '../api/getArticles';
import { useEffect, useState } from 'react';
import type { Article } from '../types';

const columns: ColumnsType<Article> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content'
  }
];

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    getArticles()
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => err);
  }, []);
  return <Table columns={columns} dataSource={articles} rowKey={'id'} />;
};

export default ArticleList;
