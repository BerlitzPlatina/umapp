// import * from './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import MenuComponent from './features/general/component/menu_component';
import MenuComponent from './features/general/component/menu_component';
import News from './features/general/News';
import Test from './features/general/Test';

const App: React.FC = () => {
  // return <MenuComponent/>;
  return (
    <Routes>
      <Route path='/' element={<MenuComponent />} />
      {/* <Route path='news' element={<News />} />
      <Route path='test' element={<Test />} /> */}
    </Routes>
  );
};

export default App;
