function removeStars(s: string): string {
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "*") {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('');
}


// function removeStars(s: string): string {
//     let i = 1;
//     while (s[i] !== undefined) {
//         if(s[i] == "*") {
//             s = s.slice(0, i - 1) + s.slice(i + 1)
//             i-- ;
//         } else {
//             i++;
//         }
//     }

//     return s;
// };