import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../assets/img/headerbanner2.png'
import {
  Row,
  Col,
  Input,
  Icon,
  Checkbox,
  Button,
  Form 
} from "antd";

class Login2 extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('prueba')
    console.log(this.state)
    
    fetch('http://127.0.0.1:8000/auth/', {
      method:'POST',
      // body: JSON.stringify(this.state),
      body: JSON.stringify(
        {username:this.state.username, password:this.state.password}
      ),    
      headers: {
        'Accept': 'application/json',
        "Content-type":"application/json;charset=UTF-8"
      }
    })
    .then(resp => resp.json())
    .then( res => {
      console.log(res.token)
      window.location.href = "/"      
    })

  }

  render(){
    return (
      <>
      <img src={banner} alt=""/>
      <Row>
        <Col span={20} offset={2}>
          <h1>Login</h1>
          <Form onSubmit={this.handleSubmit}>
            
            <Input  className="form-control" 
                    placeholder="Usuario" 
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    onChange={e => this.setState({username: e.target.value})}
            />
            
            <Input  className="form-control" 
                    placeholder="Contraseña"
                    type="password" 
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    onChange={e => this.setState({password: e.target.value})} 
            />
            
            <Checkbox className="form-control">Recuérdame</Checkbox>
            
            <Link to="auth/reset" className="form__forgot">¿Olvidaste tu contraseña?</Link>
            <Button htmlType="submit" className="form-control" type="primary" block>Ingresar</Button>
          </Form>

          <Link to="/auth/register">No tengo una cuenta, registrarme</Link>
        </Col>
      </Row>
      </>
    )
  }
}

export { Login2 }
