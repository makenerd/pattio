import React from 'react';

import Display from '../../components/Display/Display.js';

import {  fakeInfoHome } from '../../components/Display/fakeInfo.js';

function Home(props) {
    return (
        <Display pageGroups={fakeInfoHome}/>
    );
}

export { Home};