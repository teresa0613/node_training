function Count(min = '*', max = '*******', step = '*') {
    for (let start = min; max >= start; start += step) {
        console.log(start)
    }
}

console.log(Count())
