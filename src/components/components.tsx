import React, { memo } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { CodeBlock } from './code-block';

export const components = {
  p: { component: Typography },
  h1: {
    component: (props: any) => <Typography {...props} component="h1" variant="h1" />,
  },
  h2: {
    component: (props: any) => <Typography {...props} component="h2" variant="h2" />,
  },
  h3: {
    component: (props: any) => <Typography {...props} component="h3" variant="h3" />,
  },
  h4: {
    component: (props: any) => <Typography {...props} component="h4" variant="h4" />,
  },
  h5: {
    component: (props: any) => <Typography {...props} component="h5" variant="h5" />,
  },
  h6: {
    component: (props: any) => <Typography {...props} component="h6" variant="h6" />,
  },
  blockquote: {
    component: (props: any) => (
      <Paper style={{ borderLeft: '4px solid grey', padding: 8 }} {...props} />
    ),
  },
  ul: {
    component: (props: any) => <Typography {...props} component="ul" />,
  },
  ol: {
    component: (props: any) => <Typography {...props} component="ol" />,
  },
  li: {
    component: (props: any) => <Typography {...props} component="li" />,
  },
  table: {
    component: (props: any) => <MuiTable {...props} />,
  },
  tr: {
    component: (props: any) => <TableRow {...props} />,
  },
  td: {
    component: ({ align, ...props }: any) => <TableCell align={align || undefined} {...props} />,
  },
  tbody: {
    component: (props: any) => <TableBody {...props} />,
  },
  th: {
    component: ({ align, ...props }: any) => <TableCell align={align || undefined} {...props} />,
  },
  thead: {
    component: (props: any) => <TableHead {...props} />,
  },
  hr: { component: Divider },
  input: {
    component: (props: any) => {
      const { type } = props;
      if (type === 'checkbox') {
        return <Checkbox {...props} disabled={false} readOnly={true} />;
      }
      return <input {...props} />;
    },
  },
  wrapper: {
    component: (props: any) => <div {...props} className="markdown-body" />,
  },
  code: {
    component: CodeBlock,
  }
};
