const GraphStateBuilder = {
  result: {},

  addStorage(oilCount) {
    this.pdf.storage = {
      oilCount,
    };
  },
  addFactory(progress) {
    this.pdf.factory = {
      progress,
    };
  },

  getResult() {
    this.result;
  },
};

const Visitor = {
  pdfBuilder: GraphStateBuilder,

  visitStorage(storage: StorageNode) {
    this.pdfBuilder.addStorage(storage.oilCount);
  },

  visitFactory(factory: FactoryNode) {
    this.pdfBuilder.addStorage(factory.progress);
  },

  makePdf() {
    this.pdfBuilder.getResult();
  },
};

export abstract class Node {
  abstract accept(visitor: typeof Visitor);
}

class StorageNode extends Node {
  oilCount = 0;
  accept(visitor) {
    visitor.visitStorage(this);
  }
}

class FactoryNode extends Node {
  progress = 0;
  accept(visitor) {
    visitor.visitFactory(this);
  }
}

class ContainerNode extends Node {
  children: Node[] = [];
  accept(visitor) {
    this.children.forEach((child) => child.accept(visitor));
  }
}
