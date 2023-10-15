import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Title from 'antd/es/skeleton/Title';

const Home: React.FC = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: 'white' }}>
        <div>Uma Musume Main Page</div>
      </Header>
      <Layout hasSider>
        <Content>main content</Content>
        <Sider>right sidebar</Sider>
      </Layout>
    </Layout>
  );
};

export default Home;
