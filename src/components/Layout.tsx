import React, { ReactNode } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import globalStyles from '@styles/global';
import typeStyles from '@styles/typography';
import Footer from '@components/Footer';
import Header from '@components/Header';
import '@styles/fonts.scss';

interface Props {
  children: ReactNode;
}

interface Data {
  site: {
    siteMetadata: {
      author: string;
      title: string;
    };
  };
}

const LayoutContainer = styled.div``;

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            author
            title
          }
        }
      }
    `}
    render={(data: Data) => (
      <LayoutContainer className="div">
        <Global styles={[globalStyles, typeStyles]} />
        <div className="Layout">
          <Header />
          <main className="Layout__content">{children}</main>
          <Footer author={data.site.siteMetadata.author} />
        </div>
      </LayoutContainer>
    )}
  />
);

export default Layout;
