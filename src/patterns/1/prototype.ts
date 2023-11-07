interface Prototype {
  clone();
}

export class StorageNode implements Prototype {
  clone() {
    return {};
  }
}
export class FactoryNode implements Prototype {
  clone() {
    return {};
  }
}

function cloneGraph(node: Prototype) {
  node.clone();
}

const Storage = {
  address: "",

  clone() {
    return {
      address: this.address,
    };
  },
};
