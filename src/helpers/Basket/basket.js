
// Function to get the basket from localStorage
export const getBasket = () => {
    const basket = localStorage.getItem('basket');
    return basket ? JSON.parse(basket) : [];
};

// Function to save the basket to localStorage
export const setBasket = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));
};

// Function to add a product to the basket
export const addToBasket = (productId, count) => {
    if (productId != undefined) {
        const basket = getBasket();
        const productIndex = basket.findIndex(item => item.productId === productId);
        //   console.log(productId)
        if (productIndex !== -1) {
            // If the product already exists, increase the count
            basket[productIndex].count += count;
        } else {
            // If the product doesn't exist, add it to the basket
            basket.push({ productId, count: count });
        }

        setBasket(basket);
    }
};

export const reduceFromBasket = (productId) => {
    if (productId != undefined) {
        const basket = getBasket();
        const productIndex = basket.findIndex(item => item.productId === productId);
        if(basket[productIndex].count!=1){
            basket[productIndex].count-=1;
            setBasket(basket);
        }
        else{
            removeFromBasket(productId)
        }

    }
}
// Function to remove a product from the basket
export const removeFromBasket = (productId) => {
    let basket = getBasket();
    basket = basket.filter(item => item.productId !== productId);
    setBasket(basket);
};
