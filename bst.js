class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(array, root) {
    this.array = array.sort(function (a, b) {
      return a - b;
    });
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    if (array.length) {
      let start = 0;
      let end = array.length - 1;
      let mid = Math.floor((start + end) / 2);
      let left = this.buildTree(array.slice(start, mid));
      let right = this.buildTree(array.slice(mid + 1, end + 1));
      return new Node(array[mid], left, right);
    }
    return null;
  }
}
