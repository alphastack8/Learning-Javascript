function calculateDiscount(price, customerType, isHoliday) {
    let discount = 0;
    
    // First check: Holiday discount
    if (isHoliday) {
        discount = 0.15; // 15% holiday discount
        console.log("Holiday discount applied! 🎄");
    }
    
    // Second check: Customer type discount
    if (customerType === "premium") {
        discount += 0.20; // Extra 20%
        console.log("Premium member discount applied! 👑");
    } else if (customerType === "gold") {
        discount += 0.15; // Extra 15%
        console.log("Gold member discount applied! ⭐");
    } else if (customerType === "silver") {
        discount += 0.10; // Extra 10%
        console.log("Silver member discount applied! 🥈");
    } else {
        console.log("Regular customer - no extra discount");
    }
    
    // Calculate final price
    let finalPrice = price * (1 - discount);
    let savedAmount = price - finalPrice;
    
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        savedAmount: savedAmount.toFixed(2),
        finalPrice: finalPrice.toFixed(2)
    };
}

let result = calculateDiscount(100, "premium", true);
console.log(result);
// Output:
// Holiday discount applied! 🎄
// Premium member discount applied! 👑
// { originalPrice: 100, discountPercent: 35, savedAmount: '35.00', finalPrice: '65.00' }