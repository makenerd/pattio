import React from 'react';
import { useState, useEffect } from 'react';
import Group from '../../components/Group/Group.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Brands(props) {
    const [pageGroups, setPageGroups] = useState([]);
    const dispatchHeaderTitle= useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8000/api/products/groupedbybrand');
            setPageGroups(result.data);
            dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: 'Marcas'});
            };
        fetchData();
      },[]);
    
    return (
        <>
            {pageGroups.map( pageGroup => <Group {...pageGroup} groupType='scrollH' cardType='squareM' key={pageGroup.groupTitle}/>)}
        </>
    );
}

export default Brands;