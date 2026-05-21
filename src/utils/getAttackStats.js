const qualityScore = { error: 0, poor: 1, good: 2, perfect: 3 };

/** Returns n (attempts) and p (positive touch %) for a given attack location. p is null if n is 0. */
export default function getAttackStats(actions, attackLocation) {
    const zone = actions.filter((a) => a.attackLocation === attackLocation);
    const n = zone.length;
    const p = n ? Math.round((zone.filter((a) => qualityScore[a.digQuality] >= 2).length / n) * 100) : null;
    return { n, p };
}
