abstract class Node {
  paint() {}
}

class ContainerNode extends Node {
  paint() {
    this.children.forEach((child) => child.paint());
  }
  children: Node[] = [];
}
class StorageNode extends Node {
  paint() {}
}
class FactoryNode extends Node {
  paint() {}
}

export function paint(node: Node) {
  node.paint();
}
