import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export const CodeBlock = ({ children, className }: any) => {
  // const language = className.replace(/language-lang-/, '');
  return (
    <Highlight {...defaultProps} code={children} language="javascript" theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line: any, i: any) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token: any, key: any) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
