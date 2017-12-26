import React from 'react';

const SizeInput = ({ height, width, resize }) => [
    <div className="form-group" id="grid-height-group">
        <label className="control-label" htmlFor="grid-height">
            Height
        </label>
        <input
            type="number"
            id="grid-height"
            name="height"
            className="form-control"
            min="1"
            max="25"
            required
            defaultValue={height}
        />
    </div>,
    <div className="form-group" id="grid-width-group">
        <label className="control-label" htmlFor="grid-width">
            Width
        </label>
        <input
            type="number"
            id="grid-width"
            name="width"
            className="form-control"
            min="1"
            max="50"
            required
            defaultValue={width}
        />
    </div>,
    <input
        type="button"
        id="resize-btn"
        className="btn btn-default"
        value="Resize / Clear"
        onClick={() =>
            resize(
                document.getElementById('grid-height').value,
                document.getElementById('grid-width').value
            )}
    />,
];

export default sizeInput;
