import React from 'react';
import "../auth.scss"
import banner from '../../../assets/img/headerbanner2.png'
import { Link } from 'react-router-dom'
import {
    Row,
    Col,
    Input,
    Icon,
    Checkbox,
    Button 
} from "antd";

function Login() {
    return (
      <>
        <img src={banner} alt=""/>
          
          <Row>
            <Col span={20} offset={2}>
              <h1>Login</h1>
              <Input className="form-control" placeholder="Usuario" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
              <Input className="form-control" placeholder="Contraseña" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} />
              <Checkbox className="form-control">Recuérdame</Checkbox>
              <Link to="auth/reset" className="form__forgot">¿Olvidaste tu contraseña?</Link>
              <Button className="form-control" type="primary" block>Ingresar</Button>

              <Link to="/auth/register">No tengo una cuenta, registrarme</Link>
            </Col>
          </Row>
      </>
    )
}
export { Login } 