import React from 'react';
import './Group.scss';
import Card from '../Card/Card.js';
import { Link } from 'react-router-dom';

function Group(props) {
    const {groupTitle="", groupType="", groupUrl="", items=[]} = props;

    const renderGroup = items.map(item=> <Card {...item}/>);

    return (
        <div className="Group">
            <div className="GroupHeader">
                { groupTitle ? <h3>{groupTitle}</h3> : "" }
                { groupUrl ? <Link to={groupUrl}>Ver más</Link> : "" }
            </div>
            <div className={groupType}>
                {renderGroup}
            </div>
        </div>
    );
}

export default Group;