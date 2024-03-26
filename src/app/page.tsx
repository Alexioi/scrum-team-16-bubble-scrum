import { Dropdown } from '@/components';

const data = [
  {
    name: 'test',
    counter: 0,
    variants: ['1', '2', '3'],
  },
  {
    name: 'test2',
    counter: 0,
    variants: ['1', '2', '3'],
  },
  {
    name: 'test3',
    counter: 1,
    variants: ['1', '2', '3'],
  },
];

const Home = () => {
  return (
    <div style={{ width: '300px' }}>
      <Dropdown hasButtons items={data} groups={[[0], [1, 2]]} />
    </div>
  );
};

export default Home;
