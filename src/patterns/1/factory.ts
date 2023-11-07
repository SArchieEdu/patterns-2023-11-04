export abstract class Node {
  x: number;
  y: number;
  constructor() {}

  abstract paint();
}

class StorageNode extends Node {
  paint() {}
}
class FactoryNode extends Node {
  paint() {}
}
class CarNode extends Node {
  paint() {}
}

abstract class CarFactory {
  abstract createStorage();
  abstract createBuilder();
  abstract createManager();
}
class NorthCarFactory extends CarFactory {
  createStorage() {}
  createBuilder() {}
  createManager() {}
}
class CarFactory1 extends CarFactory {
  createStorage() {}
  createBuilder() {}
  createManager() {}
}
class CarFactory2 extends CarFactory {
  createStorage() {}
  createBuilder() {}
  createManager() {}
}
class CarFactory3 extends CarFactory {
  createStorage() {}
  createBuilder() {}
  createManager() {}
}

abstract class AdCreator {
  abstract createBanner();
  abstract createInRoll();
  abstract createPreroll();
}

class KinopoiskAdCreator extends AdCreator {
  createBanner() {}
  createInRoll() {}
  createPreroll() {}
}

function withAuthorization(Component) {
  return function ComponentWithAuthCheck() {
    return isAuthorized ? <Component /> : <div>Not authorized</div>;
  };
}

const ButtonWithAuth = withAuthorization(Button);
