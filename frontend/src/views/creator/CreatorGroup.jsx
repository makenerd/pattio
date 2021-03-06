import React from 'react';
import { useState, useEffect } from 'react';
import Group from '../../components/Group/Group.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

function CreatorGroup(props) {
    const [pageGroups, setPageGroups] = useState([]);
    const creatorId = props.match.params.creator;
    const groupId = props.match.params.group;
    const dispatchHeaderTitle= useDispatch()

    useEffect(() => { 
        const fetchData = async () => {
        const result = await axios(`http://localhost:8000/api/products/groupedbycategory?creator=${creatorId}&category=${groupId}&limit=1000`);
        const title = await axios(`http://localhost:8000/api/creators/title/${creatorId}`);
        setPageGroups(result.data);
        dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: title.data.name});
        };
        fetchData();
      },[]);
    
    return (
        <>
            {pageGroups.map( pageGroup => <Group {...pageGroup} groupType='scrollV' cardType='squareL' key={pageGroup.groupTitle} 
            groupUrl={`/creadores/${creatorId}/${pageGroup.groupTitle}`}
            cardUrl={`/creadores/${creatorId}/p`}/>)}
        </>
    );
}

export default CreatorGroup;