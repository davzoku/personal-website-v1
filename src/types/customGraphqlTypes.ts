import { Site, Mdx, MdxConnection } from './graphqlTypes';

export interface NeighbourPageNode {
  id: string;
  frontmatter: {
    title: string;
    slug: string;
  };
}

export interface CreatePageContext {
  id: string;
  prevPage: NeighbourPageNode;
  nextPage: NeighbourPageNode;
}

export interface DataMdx {
  site: Site;
  mdx: Mdx;
}

export interface PageTemplateProps {
  data: DataMdx;
  pageContext: CreatePageContext;
}

export interface CreateTagsPageContext {
  tag: string;
}

export interface DataAllMdx {
  site: Site;
  allMdx: MdxConnection;
}

export interface PageListingProps {
  data: DataAllMdx;
}

export interface TagsPageTemplateProps {
  data: DataAllMdx;
  pageContext: CreateTagsPageContext;
}

export interface CreateTagsListPageContext {
  prefix: string;
  type: string;
}

export interface TagsListPageTemplateProps {
  data: DataAllMdx;
  pageContext: CreateTagsListPageContext;
}

export interface LinksPageTemplateProps {
  data: {
    site: Site;
  };
}
