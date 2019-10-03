import React from 'react';
import Group from '../Group/Group.js';

function Display(props) {
    const {pageGroups} = props;
    
    const renderGroups = pageGroups.map(({groupTitle, groupType, items}) => 
    <Group groupTitle={groupTitle} groupType={groupType} items={items}/>);
    return (
        <>
            {renderGroups}
        </>
    );
}

export default Display;