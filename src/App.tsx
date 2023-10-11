// import * from './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import MenuComponent from './features/general/component/menu_component';
import MenuComponent from './features/general/component/menu_component';
import News from './features/general/News';
import Test from './features/general/Test';

const App: React.FC = () => {
  // return <MenuComponent/>;
  return (
    <div>
      <div>
        <MenuComponent />
      </div>
      <Routes>
        <Route path='/' element={<News />} />
        <Route path='/test' element={<Test />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
