// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import "../auth.scss"
// import banner from '../../../assets/img/headerbanner2.png'
// import dog from '../../../assets/img/dog_typing.gif'
// import {
//     Row,
//     Col,
//     Input,
//     Icon,
//     Button 
// } from "antd";
// import '../login/login.scss';

// function Register(props) {

//   const dispatchHeaderTitle= useDispatch()

//   useEffect(() => {
//     dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: 'Crea tu usuario :)'})
//   },[]);

//     return (
//       <div className='Login'>
//         <div className='frame'>
//           <img className='Login__img' src={dog} alt="" style={{height:'180px'}}/>
//         </div>
          
//           <Row>
//             <Col span={20} offset={2}>
//               <h1>Registro</h1>
//               <Input  className="form-control" 
//                       placeholder="Usuario" 
//                       prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               />
//               <Input  className="form-control" 
//                       placeholder="Correo electrónico" 
//                       prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               />
//               <Input  className="form-control" 
//                       placeholder="Contraseña" 
//                       prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               />
//               <Input  className="form-control" 
//                       placeholder="Confirmar Contraseña" 
//                       prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               />
//               <Button className="form-control" type="primary" block>Registrar</Button>
//             </Col>
//           </Row>
//       </div>
//     );
// }

// export default Register;

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import "../auth.scss"
import banner from '../../../assets/img/headerbanner2.png'
import dog from '../../../assets/img/dog_typing.gif'
import {
   Row,
   Col,
   Input,
   Icon,
   Button,
   Form
} from "antd";
import '../login/login.scss';
function Register(props) {
 // const dispatchHeaderTitle= useDispatch()
 // useEffect(() => {
 //   dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: 'Crea tu usuario :)'})
 // },[]);
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const dispatchUsername = useDispatch();
 const dispatchHeaderTitle= useDispatch();

 useEffect(() => {
   dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: 'Inicia sesión'})
 },[]);

 function handleSubmit (e) {
   e.preventDefault();
   console.log('prueba');
   console.log(username, email, password);
   fetch('http://127.0.0.1:8000/apiusers/register/', {
     method:'POST',
     // body: JSON.stringify(this.state),
     body: JSON.stringify(
       {username: username, email: email, password:password}
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
         <img className='Login__img' src={dog} alt="" style={{height:'180px'}}/>
       </div>
         <Row>
           <Col span={20} offset={2}>
             <h1>Registro</h1>
             <Form onSubmit={handleSubmit}>
               <Input  className="form-control"
                       placeholder="Usuario"
                       prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                       onChange={e => {setUsername(e.target.value); console.log(username);}}
               />
               <Input  className="form-control"
                       placeholder="Correo electrónico"
                       prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                       onChange={e => {setEmail(e.target.value); console.log(email);}}
               />
               <Input  className="form-control"
                       placeholder="Contraseña"
                       prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                       onChange={e => {setPassword(e.target.value); console.log(password);}}
               />
               <Input  className="form-control"
                       placeholder="Confirmar Contraseña"
                       prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
               />
               <Button htmlType="submit" className="form-control" type="primary" block>Registrar</Button>
             </Form>
           </Col>
         </Row>
     </div>
   );
}

export default Register;