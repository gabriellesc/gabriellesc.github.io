import React from 'react';

const SpeedInput = ({ speed, changeSpeed }) => (
    <div className="form-group">
        <label htmlFor="speed">Animation speed</label>
        <input
            type="range"
            id="speed"
            name="speed"
            className="form-control"
            min="0"
            max="4900"
            step="100"
            required
            defaultValue={speed}
            onChange={event => changeSpeed(event.target.value)}
        />
    </div>
);

export default SpeedInput;
