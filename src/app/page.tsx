import { Hero, Pagination } from '@/components';

const Home = () => {
  return (
    <>
      <Hero />
      <Pagination pagesCount={15} totalPagesCount={99} />
    </>
  );
}

export default Home;
