/*Write a function count that takes a number as its parameter min,
 a number maxand a number step. 
 Execution of this function should display on the terminal all 
numbers from minup to maxwith an interval of step  */

/*function Count(min, max, step) {
    while (max >= min) {
        console.log(min)
        min += step
        if (min === max) {
            break
        }
    }
}

console.log(Count(1, 15, 2))
*/

function Count(min, max, step) {
    for (let start = min; max >= start; start += step) {
        console.log(start)
    }
}

console.log(Count(1, 15, 2))
