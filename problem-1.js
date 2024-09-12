function calculateTax(income, expense) {
    if (income >= 0 && expense >= 0 && income >= expense) {
        const profit = income - expense;
        const tax = profit * 0.20;
        return tax;
    } 
    else {
        return "Invalid Input";
    }
}
// const income = -5000;  
// const expense = 2000; 
// const tax = calculateTax(income, expense);
// console.log(tax);

console.log(calculateTax(10000, 3000));  // Output: 1400
console.log(calculateTax(34000, 1753));  // Output: 6449.400000000001
console.log(calculateTax(5000, 1500));   // Output: 700
console.log(calculateTax(7000, 7000));   // Output: 0
console.log(calculateTax(-5000, 2000));  // Output: Invalid Input
console.log(calculateTax(6000, -1500));  // Output: Invalid Input