const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    this.root = null;

    if(this.root === null){
      return null;
    }else{
      return node.data;
    }
  }

  add(data) {
    this.root = addWithin(this.root, data); // добавить в наше дерево какое-то значение data

    function addWithin(node, data) {
      if(!node){
        return new Node(data); //если значение node пусто то в ноду погружается значение data
      }

      if(node.data === data){
        return node; //если значение повторяется то node отсаётся не изменной
      }

      if(data < node.data){
        node.left = addWithin(node.left, data); //если значение data меньше node.data то вызывается опять функция addWithin и node перемещается влево
      }else{
        node.right = addWithin(node.right, data); //если значение data больше node.data то вызывается опять функция addWithin и node перемещается вправо
      }

      return node; //возращается наша node
    }
  }

  has(data) {
    return searchWithin(this.root, data);
    
    function searchWithin(node,data) {
      if(!node){
        return false;
      }

      if(node.data === data){
        return true;
      }

      return data < node.data ?
          searchWithin(node.left, data) :
          searchWithin(node.right, data);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node,data) {
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }else if(node.data < data){
        node.right = removeNode(node.right, data);
        return node;
      }else{
        if(!node.left && !node.right){
          return null;    //если у узла нету потомков то удаляет и ставить null
        }

        if(!node.left){
          node = node.right; //если нет левого потомка то возвращаем правый потомок
          return node;
        }

        if(!node.right){
          node = node.left; //если нет правого потомка то возвращаем левый потомок
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if(!this.root){
      return;
    }

    let node = this.root;
    while (node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};