import React, {Component, useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import banner from '../../../assets/img/headerbanner2.png';
import cat from '../../../assets/img/cat_typing.gif';
import {
  Row,
  Col,
  Input,
  Icon,
  Checkbox,
  Button,
  Form
} from "antd";
import './login.scss';

function Login (props) {
  console.log(props);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatchUsername = useDispatch();
  const dispatchHeaderTitle= useDispatch();

  useEffect(() => {
    dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: 'Inicia sesión'})
  },[]);

  function handleSubmit (e) {
    e.preventDefault()
    console.log('prueba')
    console.log(username, password)
    
    fetch('http://127.0.0.1:8000/auth/', {
      method:'POST',
      // body: JSON.stringify(this.state),
      body: JSON.stringify(
        {username: username, password:password}
      ),    
      headers: {
        'Accept': 'application/json',
        "Content-type":"application/json;charset=UTF-8"
      }
    })
    .then(resp => resp.json())
    .then( res => {
      console.log(res.token);
      dispatchUsername({type: 'CHANGE_USER', payload: username});
      props.history.replace('/');
      // window.location.href = "/";
    });
  }

    return (
      <div className='Login'>
      <div className='frame'>
        <img src={cat} alt="" className='Login__img'/>
      </div>
  
      <Row>
        <Col span={20} offset={2}>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            
            <Input  className="form-control" 
                    placeholder="Usuario" 
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    onChange={e => {setUsername(e.target.value)}}
            />
            
            <Input  className="form-control" 
                    placeholder="Contraseña"
                    type="password" 
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    onChange={e => setPassword(e.target.value)} 
            />
            
            <Checkbox className="form-control">Recuérdame</Checkbox>
            
            <Link to="/reset" className="form__forgot">¿Olvidaste tu contraseña?</Link>
            <Button htmlType="submit" className="form-control" type="primary" block>Ingresar</Button>
          </Form>

          <Link to="/register">No tengo una cuenta, registrarme</Link>
        </Col>
      </Row>
      </div>
    );
}

export default Login;
