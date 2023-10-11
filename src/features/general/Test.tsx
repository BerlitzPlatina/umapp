import { Layout, Space } from 'antd';
import MenuComponent from './component/menu_component';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea'
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9'
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9'
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea'
};

const App: React.FC = () => (
  <Space direction='vertical' style={{ width: '100%' }}>
    <Layout>
      <Header style={{ display: 'flex', justifyContent: 'center' }}>
        <MenuComponent />
      </Header>
      <Layout hasSider>
        <Sider style={siderStyle}>Sider</Sider>
        <Content style={contentStyle}>Content</Content>
        <Sider style={siderStyle}>Sider</Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Space>
);

export default App;
