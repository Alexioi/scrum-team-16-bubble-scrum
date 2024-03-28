import { Dropdown } from '@/components';

const data = [
  {
    name: 'взрослые',
    counter: 0,
  },
  {
    name: 'дети',
    counter: 0,
  },
  {
    name: 'младенцы',
    counter: 0,
  },
];

const variants = [
  ['гость', 'гостя', 'гостей'],
  ['младенец', 'младенца', 'младенцев'],
];

const Home = () => {
  return (
    <div style={{ width: '300px' }}>
      <Dropdown
        hasButtons={false}
        items={data}
        groups={[[0, 1], [2]]}
        placeholder="Сколько гостей"
        variants={variants}
      />
    </div>
  );
};

export default Home;
