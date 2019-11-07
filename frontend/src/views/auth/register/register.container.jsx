import React from 'react';
import "../auth.scss"
import banner from '../../../assets/img/headerbanner2.png'
import dog from '../../../assets/img/dog_typing.gif'
import {
    Row,
    Col,
    Input,
    Icon,
    Button 
} from "antd";
import '../login/login.scss';

function Register() {
    return (
      <div className='Login'>
        <img className='Login__img' src={dog} alt=""/>
          
          <Row>
            <Col span={20} offset={2}>
              <h1>Registro</h1>
              <Input  className="form-control" 
                      placeholder="Usuario" 
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              <Input  className="form-control" 
                      placeholder="Correo electrónico" 
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              <Input  className="form-control" 
                      placeholder="Contraseña" 
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              <Input  className="form-control" 
                      placeholder="Confirmar Contraseña" 
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              <Button className="form-control" type="primary" block>Registrar</Button>
            </Col>
          </Row>
      </div>
    )
}

export { Register } 