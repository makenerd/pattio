import React from 'react';

import Display from '../../components/Display/Display.jsx';

import {  fakeInfoHome } from '../../components/Display/fakeInfo.js';

function Home(props) {
    return (
        <Display pageGroups={fakeInfoHome}/>
    );
}

export { Home};