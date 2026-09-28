function reverseWords(s: string): string {
    return s
        .trim()
        .split(/\s+/)
        .reverse()
        .join(' ');
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));

// function reverseWords(s: string): string {
//      let words = s.split(' ');
//     let res = [];

//     for (let i = words.length - 1; i >= 0; i--) {
//         if (words[i]) {
//             res.push(words[i]);
//         }
//     }

//     return res.join(' ');
// };

// function reverseWords(s: string): string {
//     let result = "";

//     let i = 0;
//     let wordIndex = -1;
//     while (i < s.length) {
//         if (s[i] === " " || i == s.length - 1) {
//             if (wordIndex !== -1) {
//                 if (i == s.length - 1 && s[i] != ' ') i++;
//                 result = `${s.slice(wordIndex, i)}${result ? ' ' + result : '' }`;
//                 // console.log("ici")
//                 wordIndex = -1;
//             } else if (i == s.length - 1 && s[i] != " ") {
//                 result = `${s.slice(i)}${result ? ' ' + result : '' }`
//                 // console.log("la")
//             }
//         } else {
//             if ( wordIndex == -1) {
//                 wordIndex = i;
//                 // console.log("wordIndex", wordIndex)
//             }
//         }
//         i++;
//     }
//     return result;
// };