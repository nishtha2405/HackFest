module.exports = (temp, product) => {
    let output = temp.replace(/{%PRODUCT_IMAGE%}/g, product.image);
    output = output.replace(/{%IS_ORGANIC%}/g, product.organic ? '' : 'not-organic');
    output = output.replace(/{%PRODUCT_NEUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%PRODUCT_QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRODUCT_NAME%}/g, product.productName);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%PRODUCT_PRICE%}/g, product.price);
    output = output.replace(/{%PRODUCT_PLACE%}/g, product.from);
    output = output.replace(/{%ID%}/g, product.id);
    return output;
};