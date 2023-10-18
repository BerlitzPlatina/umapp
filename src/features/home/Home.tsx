import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Title from 'antd/es/skeleton/Title';
import GridComponent from '../general/component/grid_component';

const Home: React.FC = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: 'white' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Uma Musume Main Page
        </div>
      </Header>
      <Layout hasSider>
        <Content
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column'
          }}
        >
          <GridComponent />
          <GridComponent />
        </Content>
        <Sider>right sidebar</Sider>
      </Layout>
    </Layout>
  );
};

export default Home;
