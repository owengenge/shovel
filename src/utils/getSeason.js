/**
 * Derives a volleyball season string from a date.
 * Season runs August–March (e.g. Aug 2024–Mar 2025 = "24-25").
 */
export default function getSeason(date) {
    const month = date.getMonth(); // 0-indexed, so 7 = August
    const year = date.getFullYear();
    const startYear = month >= 7 ? year : year - 1;
    const endYear = startYear + 1;
    return `${String(startYear).slice(-2)}-${String(endYear).slice(-2)}`;
}
