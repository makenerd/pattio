import React from 'react';
import happyGirl from '../../assets/img/happy_girl.gif';
import './Lists.scss';

function Lists(props) {
    return (
        <div className='Lists'>
            <div className='frame'>
                <img src={happyGirl} alt="" className='Login__img'/>
            </div>
            Listas coming soon.
        </div>
    );
}

export default Lists;