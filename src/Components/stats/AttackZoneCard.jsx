import React from "react";
import getAttackStats from "../../utils/getAttackStats";
import ContactStats from "./ContactStats";
import qualityClass from "../../utils/qualityClass";

/** Card for a single attack zone. Shows overall positive % and a contact location breakdown filtered to that zone.
 *  Grid view: contact bars. Bar view: contact court grid. */
export default function AttackZoneCard({ location, abbr, name, rowLabel, actions, barView }) {
    const { n, p } = getAttackStats(actions, location);
    const display = p !== null ? `${p}%` : "—";
    const zoneActions = actions.filter((a) => a.attackLocation === location);

    return (
        <div className="attack-zone-card">
            <div className="attack-zone-header">
                <div className="attack-zone-icon">{abbr}</div>
                <div className="attack-zone-meta">
                    <span className="attack-zone-name">{name}</span>
                    <span className="attack-zone-row-label">{rowLabel}</span>
                </div>
                <div className="attack-zone-pct-block">
                    <span className="attack-zone-pct">{display}</span>
                    <span className="attack-zone-n">n = {n}</span>
                </div>
            </div>
            <div className="attack-zone-bar-track">
                <div className={`attack-zone-bar-fill ${qualityClass(p)}`} style={{ width: p !== null ? `${p}%` : "0%" }} />
            </div>
            <ContactStats barView={barView} filteredActions={zoneActions} showHeader={false} />
        </div>
    );
}
