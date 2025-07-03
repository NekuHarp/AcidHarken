export function isSpooky() {
    const today = new Date();
    return today.getDate() === 31 && today.getMonth() === 9;
}
