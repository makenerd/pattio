import React from 'react';
import './Group.scss';
import Card from '../Card/Card.js';

function Group(props) {
    const {groupTitle, groupType, items} = props;

    const renderGroup = items.map(({image, type, description, author, price, shipping, options, sizes})=>
    <Card image={image} type={type} description={description} author={author} price={price} shipping={shipping} options={options} sizes={sizes}/>);

    return (
        <div className="Group">
            <div className="GroupHeader">
                { groupTitle ? <h3>{groupTitle}</h3> : "" }
                { (groupType === "scrollH") ? <button>Ver más</button> : "" }
            </div>
            <div className={groupType}>
                {renderGroup}
            </div>
        </div>
    );
}

export default Group;