function maxArea(height: number[]): number {
    let maxSurface = 0;
    let left = 0;
    let right = height.length - 1;
    let width = 0;
    let minHeight = 0;

    while (left < right) {
        width = right - left;
        minHeight = height[left] > height[right] ? height[right] : height[left];
        if (width * minHeight > maxSurface) {
            maxSurface = width * minHeight;
        }
        height[left] > height[right] ? right-- : left++;
    }

    return maxSurface;
};