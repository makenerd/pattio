import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "../auth.scss";
import banner from '../../../assets/img/headerbanner2.png'
import angry from '../../../assets/img/angry_typing.gif'
import {
    Row,
    Col,
    Input,
    Icon,
    Button 
} from "antd";
import '../login/login.scss';


function Password(props) {

  const dispatchHeaderTitle= useDispatch();

  useEffect(() => {
    dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: 'Cambia contraseña'})
  },[]);

    return (
      <div className='Login'>
        <div className='frame'>
          <img src={angry} alt="" className='Login__img'/>
        </div>
          
          <Row>
            <Col span={20} offset={2}>
              <h1>Cambiar contraseña</h1>
              <Input  className="form-control" 
                      placeholder="Correo electrónico" 
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              <Button className="form-control" type="primary" block>Enviar correo</Button>
            </Col>
          </Row>
      </div>
    );
}

export default Password;