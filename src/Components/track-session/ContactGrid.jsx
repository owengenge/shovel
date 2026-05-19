import React from "react";

/** Contact location buttons in a cross layout. */
export default function ContactGrid({ handleClick, contactClass }) {
    return (
        <div className="contact-grid-div">
            <h3>Contact Location</h3>
            <div className="contact-grid">
                <button
                    type="button"
                    name="contactLocation" value="In Front"
                    className={contactClass("In Front")}
                    onClick={handleClick}>In Front</button>
                <button
                    type="button"
                    name="contactLocation" value="Left"
                    className={contactClass("Left")}
                    onClick={handleClick}>Left</button>
                <button
                    type="button"
                    name="contactLocation" value="Direct"
                    className={contactClass("Direct")}
                    onClick={handleClick}>Direct</button>
                <button
                    type="button"
                    name="contactLocation" value="Right"
                    className={contactClass("Right")}
                    onClick={handleClick}>Right</button>
                <button
                    type="button"
                    name="contactLocation" value="Above"
                    className={contactClass("Above")}
                    onClick={handleClick}>Above</button>
            </div>
        </div>
    );
}
