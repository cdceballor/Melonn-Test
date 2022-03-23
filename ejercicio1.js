function odd_even_product( my_list ) {
    let result=1;
    let sum =0;
    for (let i = 0; i < my_list.length; i++) {
        result *= my_list[i];
        sum += my_list[i];
    }
    return (result % 2 === 0 ? sum : 0)
}
    
const list = [1,2,3,4]
const value = odd_even_product(list)
console.log(value)