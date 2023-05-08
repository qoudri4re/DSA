class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1; // add count property to nodes to track frequency
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        current.count++; // if value already exists, increment count
        return this;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  inOrderTraversal(callback) {
    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        callback(node);
        traverse(node.right);
      }
    };
    traverse(this.root);
  }

  findFrequency(word) {
    let found = false;
    let frequency = 0;

    // perform in-order traversal to search for the word
    this.inOrderTraversal((node) => {
      if (node.value === word) {
        frequency = node.count;
        found = true;
      }
    });

    if (!found) {
      return `The word "${word}" does not exist in the tree.`
    } else {
      return `The word "${word}" appears ${frequency} time(s) in the tree.`
    }
  }
}


const tree = new BinaryTree()
tree.insert("start")
tree.insert("child")
tree.insert("steak")
tree.insert("movie")
tree.insert("menu")
tree.insert("map")
tree.insert("pizza")
tree.insert("steak")
tree.insert("child")
tree.insert("pizza")
tree.insert("steak")
tree.insert("start")
tree.insert("pizza")
tree.insert("menu")
tree.insert("steak")
tree.insert("map")
tree.insert("menu")
tree.insert("child")
tree.insert("steak")
tree.insert("map")

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  rl.question('Enter a word to check its occurrence: ', (word) => {
    const message = tree.findFrequency(word);
    console.log(message);
    if (message.includes('does not exist in the tree.')) {
      askQuestion();
    } else {
      rl.close();
    }
  });
}
askQuestion()
