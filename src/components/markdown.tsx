import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';

import { components } from './components';

const options = {
  overrides: components,
};

export const Markdown = (props: any) => <ReactMarkdown options={options} {...props} />;
