export function availableSizes(object) {
    const sizes = object.availableSizes;
    let sizesFormatted = [];

    for (let i = 0; i < sizes.length; i++) {
        let inchToCm = Math.round(sizes[i] * 2.5);

        sizesFormatted.push(`${sizes[i]} inch (${inchToCm} cm)`);
    }

    return sizesFormatted.join(' | ');
}