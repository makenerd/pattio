import React from 'react';
import { useState, useEffect } from 'react';
import Group from '../../components/Group/Group.jsx';
import axios from 'axios';

function Categories(props) {
    const [pageGroups, setPageGroups] = useState([]);
    const categoryName = props.match.params.category;

    useEffect(() => async () => {
        const result = await axios(`http://localhost:8000/api/products/category/${categoryName}`);
        setPageGroups(result.data);
      },[]);
    
    return (
        <>
            {pageGroups.map( pageGroup => <Group {...pageGroup} groupType='scrollV' carType='squareL' />)}
        </>
    );
}

export default Categories;