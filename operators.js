let sellingPrice = 199
let listingPrice = 799

let discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discount Percentage : " + Math.round(discountPercent)+"% off");
