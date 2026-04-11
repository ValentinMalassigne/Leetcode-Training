// O(n) solution
function dailyTemperatures(temperatures: number[]): number[] {
    const result = new Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        while ( stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]] ) {
            const prevIndex = stack.pop()!;
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    } 
    return result;
}

// O(n²) solution : not optimized
// function dailyTemperatures(temperatures: number[]): number[] {
//     let answer = [];

//     for (let i = 0; i < temperatures.length; i++) {
//         let j = i;
//         while (temperatures[j] <= temperatures[i] && j < temperatures.length - 1) {
//             j++;
//         }
//         if (temperatures[j] <= temperatures[i] && j == temperatures.length - 1) {
//             answer.push(0);
//         } else {
//             answer.push(j - i);
//         }
//     }

//     return answer;
// };