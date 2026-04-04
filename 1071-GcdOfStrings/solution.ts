function isGcdOfStrings(x: string, str1: string, str2: string) : boolean {
    let i = 0;
    if (str1.length % x.length !== 0) return false;
    if (str2.length % x.length !== 0) return false;
    while (!!str1[i] || !!str2[i]) {
        if (!!str1[i] && str1[i] !== x[i % x.length]) return false;
        if (!!str2[i] && str2[i] !== x[i % x.length]) return false;
        i++;
    }
    return true;
}

function gcdOfStrings(str1: string, str2: string): string {
  const shortestStr = str1.length > str2.length ? str2 : str1;

  for (let i = shortestStr.length; i > 0 ; i--) {
    if (isGcdOfStrings(shortestStr.slice(0, i), str1, str2)) {
        return shortestStr.slice(0, i);
    }
  }
  return "";
};