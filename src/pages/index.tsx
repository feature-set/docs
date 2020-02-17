import React from 'react';
import { Markdown } from '../components/markdown';

import markdown from '../components/docs.md';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <Markdown>
      {markdown}
    </Markdown>
  );
};

export default Home;
