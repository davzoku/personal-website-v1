/* eslint-disable no-use-before-define */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildren = 'childImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpId = 'childImageSharp___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildMdxBody = 'childMdx___body',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildren = 'childMdx___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenChildren = 'childMdx___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenId = 'childMdx___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterAuthor = 'childMdx___frontmatter___author',
  ChildMdxFrontmatterCategory = 'childMdx___frontmatter___category',
  ChildMdxFrontmatterCoverAbsolutePath = 'childMdx___frontmatter___cover___absolutePath',
  ChildMdxFrontmatterCoverAccessTime = 'childMdx___frontmatter___cover___accessTime',
  ChildMdxFrontmatterCoverAtime = 'childMdx___frontmatter___cover___atime',
  ChildMdxFrontmatterCoverAtimeMs = 'childMdx___frontmatter___cover___atimeMs',
  ChildMdxFrontmatterCoverBase = 'childMdx___frontmatter___cover___base',
  ChildMdxFrontmatterCoverBirthTime = 'childMdx___frontmatter___cover___birthTime',
  ChildMdxFrontmatterCoverBirthtime = 'childMdx___frontmatter___cover___birthtime',
  ChildMdxFrontmatterCoverBirthtimeMs = 'childMdx___frontmatter___cover___birthtimeMs',
  ChildMdxFrontmatterCoverBlksize = 'childMdx___frontmatter___cover___blksize',
  ChildMdxFrontmatterCoverBlocks = 'childMdx___frontmatter___cover___blocks',
  ChildMdxFrontmatterCoverChangeTime = 'childMdx___frontmatter___cover___changeTime',
  ChildMdxFrontmatterCoverChildren = 'childMdx___frontmatter___cover___children',
  ChildMdxFrontmatterCoverChildrenImageSharp = 'childMdx___frontmatter___cover___childrenImageSharp',
  ChildMdxFrontmatterCoverChildrenMdx = 'childMdx___frontmatter___cover___childrenMdx',
  ChildMdxFrontmatterCoverCtime = 'childMdx___frontmatter___cover___ctime',
  ChildMdxFrontmatterCoverCtimeMs = 'childMdx___frontmatter___cover___ctimeMs',
  ChildMdxFrontmatterCoverDev = 'childMdx___frontmatter___cover___dev',
  ChildMdxFrontmatterCoverDir = 'childMdx___frontmatter___cover___dir',
  ChildMdxFrontmatterCoverExt = 'childMdx___frontmatter___cover___ext',
  ChildMdxFrontmatterCoverExtension = 'childMdx___frontmatter___cover___extension',
  ChildMdxFrontmatterCoverGid = 'childMdx___frontmatter___cover___gid',
  ChildMdxFrontmatterCoverId = 'childMdx___frontmatter___cover___id',
  ChildMdxFrontmatterCoverIno = 'childMdx___frontmatter___cover___ino',
  ChildMdxFrontmatterCoverMode = 'childMdx___frontmatter___cover___mode',
  ChildMdxFrontmatterCoverModifiedTime = 'childMdx___frontmatter___cover___modifiedTime',
  ChildMdxFrontmatterCoverMtime = 'childMdx___frontmatter___cover___mtime',
  ChildMdxFrontmatterCoverMtimeMs = 'childMdx___frontmatter___cover___mtimeMs',
  ChildMdxFrontmatterCoverName = 'childMdx___frontmatter___cover___name',
  ChildMdxFrontmatterCoverNlink = 'childMdx___frontmatter___cover___nlink',
  ChildMdxFrontmatterCoverPrettySize = 'childMdx___frontmatter___cover___prettySize',
  ChildMdxFrontmatterCoverPublicUrl = 'childMdx___frontmatter___cover___publicURL',
  ChildMdxFrontmatterCoverRdev = 'childMdx___frontmatter___cover___rdev',
  ChildMdxFrontmatterCoverRelativeDirectory = 'childMdx___frontmatter___cover___relativeDirectory',
  ChildMdxFrontmatterCoverRelativePath = 'childMdx___frontmatter___cover___relativePath',
  ChildMdxFrontmatterCoverRoot = 'childMdx___frontmatter___cover___root',
  ChildMdxFrontmatterCoverSize = 'childMdx___frontmatter___cover___size',
  ChildMdxFrontmatterCoverSourceInstanceName = 'childMdx___frontmatter___cover___sourceInstanceName',
  ChildMdxFrontmatterCoverUid = 'childMdx___frontmatter___cover___uid',
  ChildMdxFrontmatterDeliverables = 'childMdx___frontmatter___deliverables',
  ChildMdxFrontmatterDescription = 'childMdx___frontmatter___description',
  ChildMdxFrontmatterExtLink = 'childMdx___frontmatter___extLink',
  ChildMdxFrontmatterFeatured = 'childMdx___frontmatter___featured',
  ChildMdxFrontmatterGithubLink = 'childMdx___frontmatter___githubLink',
  ChildMdxFrontmatterGrowthStage = 'childMdx___frontmatter___growthStage',
  ChildMdxFrontmatterPublished = 'childMdx___frontmatter___published',
  ChildMdxFrontmatterReadingStatus = 'childMdx___frontmatter___readingStatus',
  ChildMdxFrontmatterRedirectTo = 'childMdx___frontmatter___redirectTo',
  ChildMdxFrontmatterRedirects = 'childMdx___frontmatter___redirects',
  ChildMdxFrontmatterSlug = 'childMdx___frontmatter___slug',
  ChildMdxFrontmatterStartDate = 'childMdx___frontmatter___startDate',
  ChildMdxFrontmatterSubtitle = 'childMdx___frontmatter___subtitle',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterTechStack = 'childMdx___frontmatter___techStack',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterType = 'childMdx___frontmatter___type',
  ChildMdxFrontmatterUpdated = 'childMdx___frontmatter___updated',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHeadings = 'childMdx___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxHtml = 'childMdx___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxId = 'childMdx___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxInternalContent = 'childMdx___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxInternalDescription = 'childMdx___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxInternalType = 'childMdx___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxMdxAst = 'childMdx___mdxAST',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentChildren = 'childMdx___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentId = 'childMdx___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxSlug = 'childMdx___slug',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpId = 'childrenImageSharp___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxBody = 'childrenMdx___body',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildren = 'childrenMdx___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterAuthor = 'childrenMdx___frontmatter___author',
  ChildrenMdxFrontmatterCategory = 'childrenMdx___frontmatter___category',
  ChildrenMdxFrontmatterCoverAbsolutePath = 'childrenMdx___frontmatter___cover___absolutePath',
  ChildrenMdxFrontmatterCoverAccessTime = 'childrenMdx___frontmatter___cover___accessTime',
  ChildrenMdxFrontmatterCoverAtime = 'childrenMdx___frontmatter___cover___atime',
  ChildrenMdxFrontmatterCoverAtimeMs = 'childrenMdx___frontmatter___cover___atimeMs',
  ChildrenMdxFrontmatterCoverBase = 'childrenMdx___frontmatter___cover___base',
  ChildrenMdxFrontmatterCoverBirthTime = 'childrenMdx___frontmatter___cover___birthTime',
  ChildrenMdxFrontmatterCoverBirthtime = 'childrenMdx___frontmatter___cover___birthtime',
  ChildrenMdxFrontmatterCoverBirthtimeMs = 'childrenMdx___frontmatter___cover___birthtimeMs',
  ChildrenMdxFrontmatterCoverBlksize = 'childrenMdx___frontmatter___cover___blksize',
  ChildrenMdxFrontmatterCoverBlocks = 'childrenMdx___frontmatter___cover___blocks',
  ChildrenMdxFrontmatterCoverChangeTime = 'childrenMdx___frontmatter___cover___changeTime',
  ChildrenMdxFrontmatterCoverChildren = 'childrenMdx___frontmatter___cover___children',
  ChildrenMdxFrontmatterCoverChildrenImageSharp = 'childrenMdx___frontmatter___cover___childrenImageSharp',
  ChildrenMdxFrontmatterCoverChildrenMdx = 'childrenMdx___frontmatter___cover___childrenMdx',
  ChildrenMdxFrontmatterCoverCtime = 'childrenMdx___frontmatter___cover___ctime',
  ChildrenMdxFrontmatterCoverCtimeMs = 'childrenMdx___frontmatter___cover___ctimeMs',
  ChildrenMdxFrontmatterCoverDev = 'childrenMdx___frontmatter___cover___dev',
  ChildrenMdxFrontmatterCoverDir = 'childrenMdx___frontmatter___cover___dir',
  ChildrenMdxFrontmatterCoverExt = 'childrenMdx___frontmatter___cover___ext',
  ChildrenMdxFrontmatterCoverExtension = 'childrenMdx___frontmatter___cover___extension',
  ChildrenMdxFrontmatterCoverGid = 'childrenMdx___frontmatter___cover___gid',
  ChildrenMdxFrontmatterCoverId = 'childrenMdx___frontmatter___cover___id',
  ChildrenMdxFrontmatterCoverIno = 'childrenMdx___frontmatter___cover___ino',
  ChildrenMdxFrontmatterCoverMode = 'childrenMdx___frontmatter___cover___mode',
  ChildrenMdxFrontmatterCoverModifiedTime = 'childrenMdx___frontmatter___cover___modifiedTime',
  ChildrenMdxFrontmatterCoverMtime = 'childrenMdx___frontmatter___cover___mtime',
  ChildrenMdxFrontmatterCoverMtimeMs = 'childrenMdx___frontmatter___cover___mtimeMs',
  ChildrenMdxFrontmatterCoverName = 'childrenMdx___frontmatter___cover___name',
  ChildrenMdxFrontmatterCoverNlink = 'childrenMdx___frontmatter___cover___nlink',
  ChildrenMdxFrontmatterCoverPrettySize = 'childrenMdx___frontmatter___cover___prettySize',
  ChildrenMdxFrontmatterCoverPublicUrl = 'childrenMdx___frontmatter___cover___publicURL',
  ChildrenMdxFrontmatterCoverRdev = 'childrenMdx___frontmatter___cover___rdev',
  ChildrenMdxFrontmatterCoverRelativeDirectory = 'childrenMdx___frontmatter___cover___relativeDirectory',
  ChildrenMdxFrontmatterCoverRelativePath = 'childrenMdx___frontmatter___cover___relativePath',
  ChildrenMdxFrontmatterCoverRoot = 'childrenMdx___frontmatter___cover___root',
  ChildrenMdxFrontmatterCoverSize = 'childrenMdx___frontmatter___cover___size',
  ChildrenMdxFrontmatterCoverSourceInstanceName = 'childrenMdx___frontmatter___cover___sourceInstanceName',
  ChildrenMdxFrontmatterCoverUid = 'childrenMdx___frontmatter___cover___uid',
  ChildrenMdxFrontmatterDeliverables = 'childrenMdx___frontmatter___deliverables',
  ChildrenMdxFrontmatterDescription = 'childrenMdx___frontmatter___description',
  ChildrenMdxFrontmatterExtLink = 'childrenMdx___frontmatter___extLink',
  ChildrenMdxFrontmatterFeatured = 'childrenMdx___frontmatter___featured',
  ChildrenMdxFrontmatterGithubLink = 'childrenMdx___frontmatter___githubLink',
  ChildrenMdxFrontmatterGrowthStage = 'childrenMdx___frontmatter___growthStage',
  ChildrenMdxFrontmatterPublished = 'childrenMdx___frontmatter___published',
  ChildrenMdxFrontmatterReadingStatus = 'childrenMdx___frontmatter___readingStatus',
  ChildrenMdxFrontmatterRedirectTo = 'childrenMdx___frontmatter___redirectTo',
  ChildrenMdxFrontmatterRedirects = 'childrenMdx___frontmatter___redirects',
  ChildrenMdxFrontmatterSlug = 'childrenMdx___frontmatter___slug',
  ChildrenMdxFrontmatterStartDate = 'childrenMdx___frontmatter___startDate',
  ChildrenMdxFrontmatterSubtitle = 'childrenMdx___frontmatter___subtitle',
  ChildrenMdxFrontmatterTags = 'childrenMdx___frontmatter___tags',
  ChildrenMdxFrontmatterTechStack = 'childrenMdx___frontmatter___techStack',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxFrontmatterType = 'childrenMdx___frontmatter___type',
  ChildrenMdxFrontmatterUpdated = 'childrenMdx___frontmatter___updated',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHeadings = 'childrenMdx___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxHtml = 'childrenMdx___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxId = 'childrenMdx___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxSlug = 'childrenMdx___slug',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG',
}

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Children = 'children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildren = 'children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildren = 'children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildrenId = 'children___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenId = 'children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalType = 'children___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenParentId = 'children___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenId = 'children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalContent = 'children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalDescription = 'children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalMediaType = 'children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalOwner = 'children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalType = 'children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildren = 'children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildrenId = 'children___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentId = 'children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalContent = 'children___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalType = 'children___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentParentChildren = 'children___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentParentId = 'children___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedAspectRatio = 'fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedBase64 = 'fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedHeight = 'fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedOriginalName = 'fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrc = 'fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSet = 'fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcWebp = 'fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedTracedSvg = 'fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedWidth = 'fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidAspectRatio = 'fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidBase64 = 'fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalImg = 'fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalName = 'fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationHeight = 'fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationWidth = 'fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSizes = 'fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrc = 'fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSet = 'fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcWebp = 'fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidTracedSvg = 'fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImageData = 'gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Id = 'id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalContent = 'internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalContentDigest = 'internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalDescription = 'internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalFieldOwners = 'internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalIgnoreType = 'internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalMediaType = 'internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalOwner = 'internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalType = 'internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OriginalHeight = 'original___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OriginalSrc = 'original___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  OriginalWidth = 'original___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildren = 'parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildren = 'parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildrenId = 'parent___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenId = 'parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalContent = 'parent___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalType = 'parent___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenParentChildren = 'parent___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenParentId = 'parent___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentId = 'parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalContent = 'parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalDescription = 'parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalMediaType = 'parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalOwner = 'parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalType = 'parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildren = 'parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildrenChildren = 'parent___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildrenId = 'parent___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentId = 'parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalContent = 'parent___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalDescription = 'parent___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalType = 'parent___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentParentChildren = 'parent___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentParentId = 'parent___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeAspectRatio = 'resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeHeight = 'resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeOriginalName = 'resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeSrc = 'resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeTracedSvg = 'resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeWidth = 'resize___width',
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
  body: Scalars['String'];
  children: Array<Node>;
  excerpt: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  mdxAST?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  rawBody: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
};

export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};

export type MdxHeadingsArgs = {
  depth?: InputMaybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth?: InputMaybe<Scalars['Int']>;
};

export type MdxConnection = {
  __typename?: 'MdxConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  Body = 'body',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Children = 'children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildren = 'children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildren = 'children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenChildrenId = 'children___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenId = 'children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenInternalType = 'children___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenChildrenParentId = 'children___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenId = 'children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalContent = 'children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalDescription = 'children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalMediaType = 'children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalOwner = 'children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenInternalType = 'children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildren = 'children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentChildrenId = 'children___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentId = 'children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalContent = 'children___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentInternalType = 'children___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentParentChildren = 'children___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenParentParentId = 'children___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Excerpt = 'excerpt',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterAuthor = 'frontmatter___author',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterCoverAbsolutePath = 'frontmatter___cover___absolutePath',
  FrontmatterCoverAccessTime = 'frontmatter___cover___accessTime',
  FrontmatterCoverAtime = 'frontmatter___cover___atime',
  FrontmatterCoverAtimeMs = 'frontmatter___cover___atimeMs',
  FrontmatterCoverBase = 'frontmatter___cover___base',
  FrontmatterCoverBirthTime = 'frontmatter___cover___birthTime',
  FrontmatterCoverBirthtime = 'frontmatter___cover___birthtime',
  FrontmatterCoverBirthtimeMs = 'frontmatter___cover___birthtimeMs',
  FrontmatterCoverBlksize = 'frontmatter___cover___blksize',
  FrontmatterCoverBlocks = 'frontmatter___cover___blocks',
  FrontmatterCoverChangeTime = 'frontmatter___cover___changeTime',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildImageSharpChildren = 'frontmatter___cover___childImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildImageSharpGatsbyImageData = 'frontmatter___cover___childImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildImageSharpId = 'frontmatter___cover___childImageSharp___id',
  FrontmatterCoverChildMdxBody = 'frontmatter___cover___childMdx___body',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildMdxChildren = 'frontmatter___cover___childMdx___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildMdxExcerpt = 'frontmatter___cover___childMdx___excerpt',
  FrontmatterCoverChildMdxFileAbsolutePath = 'frontmatter___cover___childMdx___fileAbsolutePath',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildMdxHeadings = 'frontmatter___cover___childMdx___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildMdxHtml = 'frontmatter___cover___childMdx___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildMdxId = 'frontmatter___cover___childMdx___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildMdxMdxAst = 'frontmatter___cover___childMdx___mdxAST',
  FrontmatterCoverChildMdxRawBody = 'frontmatter___cover___childMdx___rawBody',
  FrontmatterCoverChildMdxSlug = 'frontmatter___cover___childMdx___slug',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildMdxTableOfContents = 'frontmatter___cover___childMdx___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildMdxTimeToRead = 'frontmatter___cover___childMdx___timeToRead',
  FrontmatterCoverChildren = 'frontmatter___cover___children',
  FrontmatterCoverChildrenImageSharp = 'frontmatter___cover___childrenImageSharp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenImageSharpChildren = 'frontmatter___cover___childrenImageSharp___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenImageSharpGatsbyImageData = 'frontmatter___cover___childrenImageSharp___gatsbyImageData',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenImageSharpId = 'frontmatter___cover___childrenImageSharp___id',
  FrontmatterCoverChildrenMdx = 'frontmatter___cover___childrenMdx',
  FrontmatterCoverChildrenMdxBody = 'frontmatter___cover___childrenMdx___body',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenMdxChildren = 'frontmatter___cover___childrenMdx___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenMdxExcerpt = 'frontmatter___cover___childrenMdx___excerpt',
  FrontmatterCoverChildrenMdxFileAbsolutePath = 'frontmatter___cover___childrenMdx___fileAbsolutePath',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenMdxHeadings = 'frontmatter___cover___childrenMdx___headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenMdxHtml = 'frontmatter___cover___childrenMdx___html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenMdxId = 'frontmatter___cover___childrenMdx___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenMdxMdxAst = 'frontmatter___cover___childrenMdx___mdxAST',
  FrontmatterCoverChildrenMdxRawBody = 'frontmatter___cover___childrenMdx___rawBody',
  FrontmatterCoverChildrenMdxSlug = 'frontmatter___cover___childrenMdx___slug',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenMdxTableOfContents = 'frontmatter___cover___childrenMdx___tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FrontmatterCoverChildrenMdxTimeToRead = 'frontmatter___cover___childrenMdx___timeToRead',
  FrontmatterCoverChildrenChildren = 'frontmatter___cover___children___children',
  FrontmatterCoverChildrenId = 'frontmatter___cover___children___id',
  FrontmatterCoverCtime = 'frontmatter___cover___ctime',
  FrontmatterCoverCtimeMs = 'frontmatter___cover___ctimeMs',
  FrontmatterCoverDev = 'frontmatter___cover___dev',
  FrontmatterCoverDir = 'frontmatter___cover___dir',
  FrontmatterCoverExt = 'frontmatter___cover___ext',
  FrontmatterCoverExtension = 'frontmatter___cover___extension',
  FrontmatterCoverGid = 'frontmatter___cover___gid',
  FrontmatterCoverId = 'frontmatter___cover___id',
  FrontmatterCoverIno = 'frontmatter___cover___ino',
  FrontmatterCoverInternalContent = 'frontmatter___cover___internal___content',
  FrontmatterCoverInternalContentDigest = 'frontmatter___cover___internal___contentDigest',
  FrontmatterCoverInternalDescription = 'frontmatter___cover___internal___description',
  FrontmatterCoverInternalFieldOwners = 'frontmatter___cover___internal___fieldOwners',
  FrontmatterCoverInternalIgnoreType = 'frontmatter___cover___internal___ignoreType',
  FrontmatterCoverInternalMediaType = 'frontmatter___cover___internal___mediaType',
  FrontmatterCoverInternalOwner = 'frontmatter___cover___internal___owner',
  FrontmatterCoverInternalType = 'frontmatter___cover___internal___type',
  FrontmatterCoverMode = 'frontmatter___cover___mode',
  FrontmatterCoverModifiedTime = 'frontmatter___cover___modifiedTime',
  FrontmatterCoverMtime = 'frontmatter___cover___mtime',
  FrontmatterCoverMtimeMs = 'frontmatter___cover___mtimeMs',
  FrontmatterCoverName = 'frontmatter___cover___name',
  FrontmatterCoverNlink = 'frontmatter___cover___nlink',
  FrontmatterCoverParentChildren = 'frontmatter___cover___parent___children',
  FrontmatterCoverParentId = 'frontmatter___cover___parent___id',
  FrontmatterCoverPrettySize = 'frontmatter___cover___prettySize',
  FrontmatterCoverPublicUrl = 'frontmatter___cover___publicURL',
  FrontmatterCoverRdev = 'frontmatter___cover___rdev',
  FrontmatterCoverRelativeDirectory = 'frontmatter___cover___relativeDirectory',
  FrontmatterCoverRelativePath = 'frontmatter___cover___relativePath',
  FrontmatterCoverRoot = 'frontmatter___cover___root',
  FrontmatterCoverSize = 'frontmatter___cover___size',
  FrontmatterCoverSourceInstanceName = 'frontmatter___cover___sourceInstanceName',
  FrontmatterCoverUid = 'frontmatter___cover___uid',
  FrontmatterDeliverables = 'frontmatter___deliverables',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterExtLink = 'frontmatter___extLink',
  FrontmatterFeatured = 'frontmatter___featured',
  FrontmatterGithubLink = 'frontmatter___githubLink',
  FrontmatterGrowthStage = 'frontmatter___growthStage',
  FrontmatterPublished = 'frontmatter___published',
  FrontmatterReadingStatus = 'frontmatter___readingStatus',
  FrontmatterRedirectTo = 'frontmatter___redirectTo',
  FrontmatterRedirects = 'frontmatter___redirects',
  FrontmatterSlug = 'frontmatter___slug',
  FrontmatterStartDate = 'frontmatter___startDate',
  FrontmatterSubtitle = 'frontmatter___subtitle',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterTechStack = 'frontmatter___techStack',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterType = 'frontmatter___type',
  FrontmatterUpdated = 'frontmatter___updated',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Headings = 'headings',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadingsDepth = 'headings___depth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  HeadingsValue = 'headings___value',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Html = 'html',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  Id = 'id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalContent = 'internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalContentDigest = 'internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalDescription = 'internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalFieldOwners = 'internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalIgnoreType = 'internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalMediaType = 'internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalOwner = 'internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  InternalType = 'internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  MdxAst = 'mdxAST',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildren = 'parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildren = 'parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenChildrenId = 'parent___children___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenId = 'parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalContent = 'parent___children___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenInternalType = 'parent___children___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenParentChildren = 'parent___children___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentChildrenParentId = 'parent___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentId = 'parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalContent = 'parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalDescription = 'parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalMediaType = 'parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalOwner = 'parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentInternalType = 'parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildren = 'parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildrenChildren = 'parent___parent___children___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentChildrenId = 'parent___parent___children___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentId = 'parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalContent = 'parent___parent___internal___content',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalDescription = 'parent___parent___internal___description',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentInternalType = 'parent___parent___internal___type',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentParentChildren = 'parent___parent___parent___children',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ParentParentParentId = 'parent___parent___parent___id',
  RawBody = 'rawBody',
  Slug = 'slug',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TableOfContents = 'tableOfContents',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  TimeToRead = 'timeToRead',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  WordCountParagraphs = 'wordCount___paragraphs',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  WordCountSentences = 'wordCount___sentences',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  WordCountWords = 'wordCount___words',
}

export type MdxFilterInput = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter';
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<Scalars['String']>>>;
  cover?: Maybe<File>;
  deliverables?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  extLink?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  githubLink?: Maybe<Scalars['String']>;
  growthStage?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  readingStatus?: Maybe<Scalars['String']>;
  redirectTo?: Maybe<Scalars['String']>;
  redirects?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  techStack?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated?: Maybe<Scalars['Date']>;
};

export type MdxFrontmatterStartDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MdxFrontmatterUpdatedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  category?: InputMaybe<StringQueryOperatorInput>;
  cover?: InputMaybe<FileFilterInput>;
  deliverables?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extLink?: InputMaybe<StringQueryOperatorInput>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  githubLink?: InputMaybe<StringQueryOperatorInput>;
  growthStage?: InputMaybe<StringQueryOperatorInput>;
  published?: InputMaybe<BooleanQueryOperatorInput>;
  readingStatus?: InputMaybe<StringQueryOperatorInput>;
  redirectTo?: InputMaybe<StringQueryOperatorInput>;
  redirects?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  startDate?: InputMaybe<DateQueryOperatorInput>;
  subtitle?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  techStack?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updated?: InputMaybe<DateQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
  depth?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdxFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
}

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allMdx: MdxConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allWebMentionEntry: WebMentionEntryConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  mdx?: Maybe<Mdx>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  webMentionEntry?: Maybe<WebMentionEntry>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MdxSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryAllWebMentionEntryArgs = {
  filter?: InputMaybe<WebMentionEntryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WebMentionEntrySortInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QueryMdxArgs = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryWebMentionEntryArgs = {
  author?: InputMaybe<WebMentionAuthorFilterInput>;
  bookmarkOf?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<WebMentionContentFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  inReplyTo?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  likeOf?: InputMaybe<StringQueryOperatorInput>;
  mentionOf?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  published?: InputMaybe<DateQueryOperatorInput>;
  repostOf?: InputMaybe<StringQueryOperatorInput>;
  rsvp?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  wmId?: InputMaybe<IntQueryOperatorInput>;
  wmPrivate?: InputMaybe<BooleanQueryOperatorInput>;
  wmProperty?: InputMaybe<StringQueryOperatorInput>;
  wmReceived?: InputMaybe<DateQueryOperatorInput>;
  wmSource?: InputMaybe<StringQueryOperatorInput>;
  wmTarget?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataImage = 'siteMetadata___image',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataTwitterUsername = 'siteMetadata___twitterUsername',
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version',
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version',
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  twitterUsername?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebMentionAuthor = {
  __typename?: 'WebMentionAuthor';
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WebMentionAuthorFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  photo?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WebMentionContent = {
  __typename?: 'WebMentionContent';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type WebMentionContentFilterInput = {
  html?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type WebMentionEntry = Node & {
  __typename?: 'WebMentionEntry';
  author?: Maybe<WebMentionAuthor>;
  bookmarkOf?: Maybe<Scalars['String']>;
  children: Array<Node>;
  content?: Maybe<WebMentionContent>;
  id: Scalars['ID'];
  inReplyTo?: Maybe<Scalars['String']>;
  internal: Internal;
  likeOf?: Maybe<Scalars['String']>;
  mentionOf?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  published?: Maybe<Scalars['Date']>;
  repostOf?: Maybe<Scalars['String']>;
  rsvp?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wmId?: Maybe<Scalars['Int']>;
  wmPrivate?: Maybe<Scalars['Boolean']>;
  wmProperty?: Maybe<Scalars['String']>;
  wmReceived?: Maybe<Scalars['Date']>;
  wmSource?: Maybe<Scalars['String']>;
  wmTarget?: Maybe<Scalars['String']>;
};

export type WebMentionEntryPublishedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WebMentionEntryWmReceivedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WebMentionEntryConnection = {
  __typename?: 'WebMentionEntryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WebMentionEntryEdge>;
  group: Array<WebMentionEntryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WebMentionEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type WebMentionEntryConnectionDistinctArgs = {
  field: WebMentionEntryFieldsEnum;
};

export type WebMentionEntryConnectionGroupArgs = {
  field: WebMentionEntryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type WebMentionEntryConnectionMaxArgs = {
  field: WebMentionEntryFieldsEnum;
};

export type WebMentionEntryConnectionMinArgs = {
  field: WebMentionEntryFieldsEnum;
};

export type WebMentionEntryConnectionSumArgs = {
  field: WebMentionEntryFieldsEnum;
};

export type WebMentionEntryEdge = {
  __typename?: 'WebMentionEntryEdge';
  next?: Maybe<WebMentionEntry>;
  node: WebMentionEntry;
  previous?: Maybe<WebMentionEntry>;
};

export enum WebMentionEntryFieldsEnum {
  AuthorName = 'author___name',
  AuthorPhoto = 'author___photo',
  AuthorType = 'author___type',
  AuthorUrl = 'author___url',
  BookmarkOf = 'bookmarkOf',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentHtml = 'content___html',
  ContentText = 'content___text',
  Id = 'id',
  InReplyTo = 'inReplyTo',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  LikeOf = 'likeOf',
  MentionOf = 'mentionOf',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Published = 'published',
  RepostOf = 'repostOf',
  Rsvp = 'rsvp',
  Type = 'type',
  Url = 'url',
  WmId = 'wmId',
  WmPrivate = 'wmPrivate',
  WmProperty = 'wmProperty',
  WmReceived = 'wmReceived',
  WmSource = 'wmSource',
  WmTarget = 'wmTarget',
}

export type WebMentionEntryFilterInput = {
  author?: InputMaybe<WebMentionAuthorFilterInput>;
  bookmarkOf?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<WebMentionContentFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  inReplyTo?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  likeOf?: InputMaybe<StringQueryOperatorInput>;
  mentionOf?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  published?: InputMaybe<DateQueryOperatorInput>;
  repostOf?: InputMaybe<StringQueryOperatorInput>;
  rsvp?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  wmId?: InputMaybe<IntQueryOperatorInput>;
  wmPrivate?: InputMaybe<BooleanQueryOperatorInput>;
  wmProperty?: InputMaybe<StringQueryOperatorInput>;
  wmReceived?: InputMaybe<DateQueryOperatorInput>;
  wmSource?: InputMaybe<StringQueryOperatorInput>;
  wmTarget?: InputMaybe<StringQueryOperatorInput>;
};

export type WebMentionEntryGroupConnection = {
  __typename?: 'WebMentionEntryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WebMentionEntryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WebMentionEntryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WebMentionEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type WebMentionEntryGroupConnectionDistinctArgs = {
  field: WebMentionEntryFieldsEnum;
};

export type WebMentionEntryGroupConnectionGroupArgs = {
  field: WebMentionEntryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type WebMentionEntryGroupConnectionMaxArgs = {
  field: WebMentionEntryFieldsEnum;
};

export type WebMentionEntryGroupConnectionMinArgs = {
  field: WebMentionEntryFieldsEnum;
};

export type WebMentionEntryGroupConnectionSumArgs = {
  field: WebMentionEntryFieldsEnum;
};

export type WebMentionEntrySortInput = {
  fields?: InputMaybe<Array<InputMaybe<WebMentionEntryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed';
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed';
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid';
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: 'ImageSharpFluid';
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid';
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PagesQueryQuery = {
  __typename?: 'Query';
  allSiteFunction: {
    __typename?: 'SiteFunctionConnection';
    nodes: Array<{ __typename?: 'SiteFunction'; functionRoute: string }>;
  };
  allSitePage: {
    __typename?: 'SitePageConnection';
    nodes: Array<{ __typename?: 'SitePage'; path: string }>;
  };
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SiteTitleQueryQuery = {
  __typename?: 'Query';
  site?: {
    __typename?: 'Site';
    siteMetadata?: {
      __typename?: 'SiteSiteMetadata';
      author?: string | null;
      title?: string | null;
    } | null;
  } | null;
};
