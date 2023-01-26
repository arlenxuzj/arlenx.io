import { Node } from 'unist';
import type { Visitor, VisitorResult } from 'unist-util-visit';
import { visit } from 'unist-util-visit';
import util from 'util';

const rehypeLogger = () => {
  const visitor: Visitor = (node): VisitorResult => {
    console.log(util.inspect(node, false, 8, true));
    console.log('-'.repeat(80));
  };
  return (tree: Node) => visit(tree, 'element', visitor);
};

export default rehypeLogger;
