function getMoviePrice(getOriginMoviePrice, region, getAccountDiscount) {
  return getOriginMoviePrice() + RegionPrice[region]() - getAccountDiscount();
}

function get1Region() {
  return 567;
}
function get2Region() {
  return 23;
}
function get3Region() {
  return 123;
}
