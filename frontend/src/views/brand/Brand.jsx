import React from 'react';
import { useState, useEffect } from 'react';
import Display from '../../components/Display/Display.jsx';
import Group from '../../components/Group/Group.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

function Brand(props) {
    const [pageGroups, setPageGroups] = useState([]);
    const brandId = props.match.params.brand;
    const dispatchHeaderTitle = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(`http://localhost:8000/api/products/grouped?brand=${brandId}`);
        const title = await axios(`http://localhost:8000/api/brands/title/${brandId}`);
        setPageGroups(result.data);
        dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: title.data.name})
        };
        fetchData();
      },[]);
    
    return (
        <>
            {pageGroups.map( pageGroup => <Group {...pageGroup} groupType='scrollH' cardType='squareM' key={pageGroup.groupTitle}/>)}
        </>
    );
}

export default Brand;