import React from 'react';
import './Group.scss';
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

function Group(props) {
    // const {groupTitle="", groupType="", groupUrl="", items=[]} = props;
    const groupTitle= props.groupTitle;
    const groupUrl= '';
    const items = props.group;
    const groupType= props.groupType;
    const cardType= props.cardType;

    const renderGroup = items.map(item=> <Card {...item} cardType={cardType} key={item._id}/>);

    return (
        <div className="Group">
            <div className="GroupHeader">
                { groupTitle ? 
                    <h3>{groupTitle} 
                        <Link to='/newproduct'>  <Icon type="plus-circle" className='groupAddBtn' /></Link>
                    </h3> : "" }
                { groupUrl ? <Link to={groupUrl}>Ver más</Link> : "" }
            </div>
            <div className={groupType}>
                {renderGroup}
            </div>
        </div>
    );
}

export default Group;

// {
//     category: "Calzado",
//     group: [
//     {
//     brand: {
//     name: "Naga"
//     },
//     _id: "5dbf77f5d6108c2f41d99360",
//     name: "Nombre de prenda",
//     price: 99.99,
//     thumbnail: "https://source.unsplash.com/random/63"
//     },
//     {
//     brand: {
//     name: "Naga"
//     },
//     _id: "5dbf77f5d6108c2f41d99371",
//     name: "Nombre de prenda",
//     price: 99.99,
//     thumbnail: "https://source.unsplash.com/random/74"
//     },
//     {
//     brand: {
//     name: "Naga"
//     },
//     _id: "5dbf77f5d6108c2f41d9938a",
//     name: "Nombre de prenda",
//     price: 99.99,
//     thumbnail: "https://source.unsplash.com/random/57"
//     }
//     ]
//     },