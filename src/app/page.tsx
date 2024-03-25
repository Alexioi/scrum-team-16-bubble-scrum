import { HelloToxin } from '@/components';
import { Typography } from '@/components/atoms/Typography';

const Home = () => {
  return (
    <>
      <HelloToxin />
      <Typography tag="h1">Text</Typography>
      <Typography tag="h2">Text</Typography>
      <Typography tag="h3">Text</Typography>
      <Typography tag="p">Text</Typography>
      <Typography tag="span">Text</Typography>
      <Typography>Text</Typography>
      <Typography tag="h3" style={{ fontSize: '100px' }}>
        Text
      </Typography>
    </>
  );
};

export default Home;
