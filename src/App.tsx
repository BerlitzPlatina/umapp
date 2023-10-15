// import * from './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import MenuComponent from './features/general/component/menu_component';
import MenuComponent from './features/general/component/menu_component';
import News from './features/general/News';
import Test from './features/general/Test';
import { Layout, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Example from './features/general/Example';
import Home from './features/home/Home';
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
const App: React.FC = () => {
  // return <MenuComponent/>;
  return (
    <div>
      {/* <div>
        <MenuComponent />
      </div> */}
      <Space direction='vertical' style={{ width: '100%' }}>
        <Layout>
          <Header style={{ display: 'flex', justifyContent: 'center' }}>
            <MenuComponent />
          </Header>
          <Layout
            style={{ display: 'flex', justifyContent: 'space-between' }}
            hasSider
          >
            <Sider style={siderStyle}></Sider>
            {/* <Content style={contentStyle}>Content</Content> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/test' element={<Test />} />
              <Route path='/news' element={<News />} />
              <Route path='/example' element={<Example />} />
            </Routes>
            <Sider style={siderStyle}></Sider>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
    </div>
  );
};

export default App;
