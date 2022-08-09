import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import components from '.';

const DefaultProvider = ({ children }) => (
  <MDXProvider components={{ ...components }}>{children}</MDXProvider>
);

export default DefaultProvider;
