import { Card, List } from 'antd';

const data = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  },
  {
    title: 'Title 4'
  },
  {
    title: 'Title 4'
  },
  {
    title: 'Title 4'
  },
  {
    title: 'Title 4'
  },
  {
    title: 'Title 4'
  }
];
const { Meta } = Card;
const GridComponent: React.FC = () => (
  <List
    style={{ margin: 16 }}
    header={<div>Header</div>}
    itemLayout='vertical'
    grid={{ gutter: 8, column: 6 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card
          cover={
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                width='128px'
                height='128px'
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            </div>
          }
        >
          <Meta title='A' />
        </Card>
      </List.Item>
    )}
  />
);

export default GridComponent;
