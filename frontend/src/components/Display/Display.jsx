import React from 'react';
import Group from '../Group/Group.jsx';
import axios from 'axios';
import { useEffect } from 'react';
import uuid from 'uuid/v4';

function Display(props) {
    const {pageGroups} = props;

    useEffect(async () => {
        const result = await axios('http://localhost:8000/api/products');
        console.log(result.data);
        // console.log(JSON.stringify(result.data));
      },[]);
    
    const renderGroups = pageGroups.map( pageGroup => <Group {...pageGroup} />);
    return (
        <>
            {renderGroups}
        </>
    );
}

export default Display;