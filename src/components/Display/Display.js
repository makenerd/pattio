import React from 'react';
import Group from '../Group/Group.js';

function Display(props) {
    const {pageGroups} = props;
    
    const renderGroups = pageGroups.map( pageGroup => <Group {...pageGroup} />);
    return (
        <>
            {renderGroups}
        </>
    );
}

export default Display;