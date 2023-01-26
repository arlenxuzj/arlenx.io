import { MDXComponents as Components } from 'mdx/types';

import MDXDevIconSet, { MDXDevIcon } from './MDXDevIconSet';
import MDXFindMe from './MDXFindMe';
import MDXBlockquote from './Widgets/MDXBlockquote';
import MDXCallout from './Widgets/MDXCallout';
import MDXCode from './Widgets/MDXCode';
import { MDXHr } from './Widgets/MDXCommon';
import {
  MDXHeading1,
  MDXHeading2,
  MDXHeading3,
  MDXHeading4,
  MDXHeading5,
  MDXHeading6
} from './Widgets/MDXHeading';
import MDXImage from './Widgets/MDXImage';
import MDXLink from './Widgets/MDXLink';
import {
  MDXListItem,
  MDXOrderedList,
  MDXUnorderedList
} from './Widgets/MDXList';
import MDXParagraph from './Widgets/MDXParagraph';
import MDXPre from './Widgets/MDXPre';
import {
  MDXTable,
  MDXTableBody,
  MDXTableCell,
  MDXTableHead,
  MDXTableRow
} from './Widgets/MDXTable';

const MDXComponents: Components = {
  h1: MDXHeading1,
  h2: MDXHeading2,
  h3: MDXHeading3,
  h4: MDXHeading4,
  h5: MDXHeading5,
  h6: MDXHeading6,
  p: MDXParagraph,
  hr: MDXHr,
  blockquote: MDXBlockquote,
  ul: MDXUnorderedList,
  ol: MDXOrderedList,
  li: MDXListItem,
  img: MDXImage,
  a: MDXLink,
  aside: MDXCallout,
  code: MDXCode,
  pre: MDXPre,
  table: MDXTable,
  thead: MDXTableHead,
  tbody: MDXTableBody,
  tr: MDXTableRow,
  th: MDXTableCell,
  td: MDXTableCell,
  MDXParagraph,
  MDXDevIconSet,
  MDXDevIcon,
  MDXFindMe
};

export default MDXComponents;
