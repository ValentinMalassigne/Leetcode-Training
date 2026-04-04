function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandies = 0;
    let result = []; 
    for (const value of candies) {
        if (value > maxCandies) {
            maxCandies = value;
        }
    }

    for (const value of candies) {
        if (value + extraCandies >= maxCandies) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result;
};