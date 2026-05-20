const qualityScore = { error: 0, poor: 1, good: 2, perfect: 3 };

export default function getContactStats(actions, contactLocation) {
    const zone = actions.filter((a) => a.contactLocation === contactLocation);
    const n = zone.length;
    const p = n ? Math.round((zone.filter((a) => qualityScore[a.digQuality] >= 2).length / n) * 100) : null;
    return { n, p };
}
