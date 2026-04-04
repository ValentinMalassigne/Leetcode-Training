function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let emptyValidSpots = 0;
    let i = 0;

    while (i < flowerbed.length) {
        if (flowerbed[i] == 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1) {
            emptyValidSpots++;
            i++;
        }
        i++;
    }
    return emptyValidSpots >= n;
};