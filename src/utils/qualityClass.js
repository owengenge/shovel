export default function qualityClass(p) {
    if (p === null || p === undefined) return '';
    if (p <= 25) return 'q-error';
    if (p <= 50) return 'q-poor';
    if (p <= 75) return 'q-good';
    return 'q-perfect';
}