import React from 'react';
import { useState, useEffect } from 'react';
import Group from '../../components/Group/Group.jsx';
import axios from 'axios';

function Category(props) {
    const [pageGroups, setPageGroups] = useState([]);
    const categoryName = props.match.params.category;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:8000/api/products/groupedbycategory?category=${categoryName}`);
            console.log(categoryName);
            console.log(result);
            console.log(result.data);
            setPageGroups(result.data);
        };
        fetchData();
    }, []);

    return (
        <>
            {pageGroups.map( pageGroup => <Group {...pageGroup} groupType='scrollV' cardType='squareL' key={pageGroup.groupTitle}/>)}
        </>
    );
}

export default Category;