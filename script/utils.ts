export function uniqueSymbol() {
    return Math.ceil(Math.random() * 0xefffffff + 0x10000000).toString(16);
}
