export function nameFormat(object) {
    const brand = object.brand;
    const type = object.type;
    const name = object.name;

    return `${brand} ${type} - ${name}`;
}