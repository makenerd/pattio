import React from 'react';
import "../auth.scss"
import banner from '../../../assets/img/headerbanner2.png'
import {
    Row,
    Col,
    Input,
    Icon,
    Button 
} from "antd";

function Password() {
    return (
      <>
        <img src={banner} alt=""/>
          
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
      </>
    )
}

export { Password } 