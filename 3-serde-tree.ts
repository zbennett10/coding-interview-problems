/*
    Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

    For example, given the following Node class

    class Node:
        def __init__(self, val, left=None, right=None):
            self.val = val
            self.left = left
            self.right = right
    The following test should pass:

    node = Node('root', Node('left', Node('left.left')), Node('right'))
    assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

class TreeNode {
    val: string;
    left: TreeNode;
    right: TreeNode;

    constructor(val: string, left?: TreeNode, right?: TreeNode) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    serialize(root: TreeNode = this): string {
        let left, right;
        if (root.left) left = `TreeNode(${root.left.val}, ${root.serialize(root.left)})`;
        if (root.right) right = `TreeNode(${root.right.val}, ${root.serialize(root.right)})`

        if (left && right) return `TreeNode(${this.val}, ${left}, ${right})`;
        if (left && !right) return `TreeNode(${this.val}, ${left})`;
        if (right && !left) return `TreeNode(${this.val}, ${right})`;
        if (!left && !right) return '';
    }

    deserialize(tree: string = this.serialize()): TreeNode {
        let left, right;
        if (this.left) left = this.left.deserialize(this.left.serialize());
        if (this.right) right = this.left.deserialize(this.right.serialize());

        return new TreeNode(this.val, left, right);
    }
}

function testSerialize() {
    const tree = new TreeNode('root', new TreeNode('left', new TreeNode('left.left')), new TreeNode('right'));
    console.log(tree.deserialize(tree.serialize()).left.left.val === 'left.left');
}

testSerialize();