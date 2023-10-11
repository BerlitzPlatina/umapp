import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Test from '../Test';
import News from '../News';

const items: MenuProps['items'] = [
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: <Link to='/test'>test</Link>,
            key: 'setting:1'
          },
          {
            label: <Link to='/news'>news</Link>,
            key: 'setting:2'
          }
        ]
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3'
          },
          {
            label: 'Option 4',
            key: 'setting:4'
          }
        ]
      }
    ]
  }
];

const MenuComponent: React.FC = () => {
  return <Menu mode='horizontal' items={items} />;
};

export default MenuComponent;
