abstract class PriceCalculator {
  calculatePrice() {
    return (
      this.calculateBasePrice() +
      this.calculateRegionPrice() -
      this.calculateDiscount()
    );
  }

  abstract calculateRegionPrice();
  abstract calculateDiscount();
  abstract calculateBasePrice();
}

class CurrentRegionPriceCalculator extends PriceCalculator {
  calculateRegionPrice() {
    return 12;
  }
  calculateDiscount() {
    return 5;
  }
  calculateBasePrice() {
    return 10;
  }
}

const currentPriceCalculator = new CurrentRegionPriceCalculator();

currentPriceCalculator.calculatePrice();
