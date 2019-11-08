import React from 'react';
import { useState, useEffect } from 'react';
import Group from '../../components/Group/Group.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Creators(props) {
    const [pageGroups, setPageGroups] = useState([]);
    const dispatchHeaderTitle= useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8000/api/products/groupedbycreator');
            setPageGroups(result.data);
            dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: 'Creadores'});
            };
        fetchData();
      },[]);
    
    return (
        <>
            {pageGroups.map( pageGroup => <Group {...pageGroup} groupType='scrollH' cardType='squareM' key={pageGroup.groupTitle}
            groupUrl={`/creadores/${pageGroup.groupId}`}
            cardUrl={`/creadores/${pageGroup.groupId}/p`}/>)}
        </>
    );
}

export default Creators;