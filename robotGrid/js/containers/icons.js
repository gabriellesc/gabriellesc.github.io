import React from 'react';

const Icons = ({ icons, cellDim }) => (
    <div className="row" id="robots" key="icons">
        <div className="col-xs-12">
            {icons.map(({ robot, goal }, i) => [
                <img
                    className="robot-img"
                    key={'r' + i}
                    src={'img/' + robot}
                    style={{ width: cellDim, height: cellDim }}
                />,
                <img
                    className="goal-img"
                    key={'g' + i}
                    src={'img/' + goal}
                    style={{ width: cellDim, height: cellDim }}
                />,
            ])}
        </div>
    </div>
);

export default Icons;
