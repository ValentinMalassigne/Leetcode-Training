
//  Definition for a binary tree node.
 class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        const minNode = findMin(root.right);

        root.val = minNode.val;

        root.right = deleteNode(root.right, minNode.val)
    }

    return root;
};

function findMin(node: TreeNode): TreeNode {
  while (node.left) {
    node = node.left
  }
  return node
}