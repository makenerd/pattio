import React from 'react';
import './Group.scss';
import Card from '../Card/Card.js';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import uuid from 'uuid/v4';

function Group(props) {
    const {groupTitle="", groupType="", groupUrl="", items=[]} = props;

    const renderGroup = items.map(item=> <Card {...item}/>);

    return (
        <div className="Group" key={uuid()}>
            <div className="GroupHeader">
                { groupTitle ? <h3>{groupTitle} <Icon type="plus-circle" /></h3> : "" }
                { groupUrl ? <Link to={groupUrl}>Ver más</Link> : "" }
            </div>
            <div className={groupType}>
                {renderGroup}
            </div>
        </div>
    );
}

export default Group;