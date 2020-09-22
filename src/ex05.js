function showStars(number) {
    let number = '*'
    for (let start = number; max >= start; start += step) {
        console.log(number)
    }
}

console.log(showStars(3))
