// from end
// function uniquePaths(m: number, n: number): number {
//     const grid: number[][] = Array.from({ length: m }, () => new Array(n));

//     grid[m - 1][n - 1] = 1;
//     for (let i = m - 1; i >= 0; i--) {
//         for (let j = n - 1; j >= 0; j--) {
//             if (i == m - 1 && j == n -1) continue;
//             const right = grid[i]?.[j + 1] ?? 0;
//             const under = grid[i + 1]?.[j] ?? 0;
//             grid[i][j] = right + under;
//         }
//     }

//     return grid[0][0]
// };

//from start
function uniquePaths(m: number, n: number): number {
    const grid: number[][] = Array.from({ length: m }, () => Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
        }
    }

    return grid[m - 1][n - 1];
}