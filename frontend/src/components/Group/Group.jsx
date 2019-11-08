import React from 'react';
import './Group.scss';
import Card, { GroupTitle } from '../Card/Card.jsx';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

function Group(props) {
    // const {groupTitle="", groupType="", groupUrl="", items=[]} = props;
    const groupTitle= props.groupTitle;
    const items = props.group;
    const groupType= props.groupType;
    const cardType= props.cardType;
    const groupUrl= props.groupUrl;
    const cardUrl= props.cardUrl;

    const renderGroup = items.map(item=> <Card {...item} cardType={cardType} key={item._id} cardUrl={`${cardUrl}/${item._id}`}/>);

    return (
        <div className="Group sketchy">
            <div className="GroupHeader">
                <h3>{groupTitle}</h3>
                <Link to='/newproduct'><Icon type="plus-circle" className='groupAddBtn'/></Link>
                { (groupType==='scrollH') ? <Link to={groupUrl}>Ver más</Link> : "" }
            </div>
            <div className={groupType}>
                <div className={`${groupType}__inner`}>
                    {renderGroup}
                </div>
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