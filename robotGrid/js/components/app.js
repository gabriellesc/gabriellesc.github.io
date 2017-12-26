import React from 'react';

import Controls from '../containers/controls.js';
import Icons from '../containers/icons.js';
import Warehouse from '../containers/warehouse.js';

const images = {
    rack: 'img/rack.png',
    icons: [
        { robot: 'r1.jpg', goal: 'g1.jpg' },
        { robot: 'r2.jpg', goal: 'g2.jpg' },
        { robot: 'r3.jpg', goal: 'g3.jpg' },
        { robot: 'r4.jpg', goal: 'g4.jpg' },
    ],
};

const App = () => [
    <Controls key="controls" />,
    <Icons key="icons" icons={images.icons} />,
    <Warehouse key="warehouse" images={images} />,
];

export default App;
