function findMaxAverage(nums: number[], k: number): number {
    let maxAverage = nums.slice(0, k).reduce((accumulator, currentValue) => accumulator + currentValue, 0) / k;
    let nextAverage = maxAverage;

    for (let i = k; i < nums.length; i++) {
        nextAverage = nextAverage - nums[i - k]/k + nums[i]/k;

        if (nextAverage > maxAverage) {
            maxAverage = nextAverage;
        }
    }

    return maxAverage;

};