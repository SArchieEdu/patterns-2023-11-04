function getMoviePrice(getOriginMoviePrice, region, getAccountDiscount) {
  return getOriginMoviePrice() + RegionPrice[region]() - getAccountDiscount();
}

function get1Region() {
  return;
}
function get2Region() {
  return;
}
function get3Region() {
  return;
}

const RegionPrice = {
  "": () => {},
};

getMoviePrice(() => 100, get1Region);
