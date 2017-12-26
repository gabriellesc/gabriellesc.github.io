import React from 'react';

import SizeInput from './sizeInput.js';
import SpeedInput from './speedInput.js';

const Controls = ({ step, run }) => (
    <div className="content row">
        <form className="form-inline col-lg-12">
            <SizeInput />

            <SpeedInput />

            <input
                type="button"
                id="step-btn"
                className="btn btn-success"
                value="Step"
                onClick={() => step()}
            />

            <input
                type="button"
                id="run-btn"
                className="btn btn-primary"
                value="Run"
                onClick={() => run()}
            />
        </form>
    </div>
);

export default Controls;
