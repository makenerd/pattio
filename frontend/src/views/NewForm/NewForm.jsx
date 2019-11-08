import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Select, Icon, Divider, Input, Button } from 'antd';
import './NewForm.scss';
import axios from 'axios';
import happyGirl from '../../assets/img/happy_girl.gif';
import happyGirls from '../../assets/img/happy_girls.gif';

const styles = {
    form_input: { width: 300, margin: '5px', display: 'flex', justifyItems: 'center' }
}

function CategoryForm (props) {
    const { Option } = Select;
    const { setFormInfo, formInfo } = props;
    const categories = ['Vestidos', 'Calzado', 'Pantalones', 'Abrigos', 'Polos', 'Blusas', 'Swimwear', 'Underwear', 'Accesorios'];
    return (
        <Select
        onChange={value => setFormInfo({...formInfo, category: value})}
        showSearch
        style={{ width: 300, margin: '5px' }}
        placeholder="Categoria?"
        optionFilterProp="children"
        notFoundContent='No hay! 😕'
        filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        {categories.map(category => <Option value={category} key={category}>{category}</Option>)}
        </Select>
    );
}


function NewForm(props) {
    const [formInfo, setFormInfo] = useState({category: '', brand: '', name: '', thumbnail: '', price: ''});
  const dispatchHeaderTitle= useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        const submit = axios.post('http://localhost:8000/api/products', formInfo);
        console.log(submit);
        console.log(formInfo);
        setFormInfo({category: '', brand: '', name: '', thumbnail: '', price: ''});
    }

    useEffect(() => {
        dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: 'Nuevo producto'})
      },[]);

    return (
        <form action="" className='NewForm'>
            <div className='frame'>
                <img src={happyGirls} alt="" className='Login__img'/>
            </div>
            <CategoryForm setFormInfo={setFormInfo} formInfo={formInfo}/>
            <Input className='NewForm__input' placeholder="Marca??" style={styles.form_input} onChange={e => setFormInfo({...formInfo, brand: {name: e.target.value, id: '5dbe491c5b0f361a5fe90f5a'}})}/>
            <Input className='NewForm__input' placeholder="Nombre???" style={styles.form_input} onChange={e => setFormInfo({...formInfo, name: e.target.value})}/>
            <Input className='NewForm__input' placeholder="Fotos???" style={styles.form_input} onChange={e => setFormInfo({...formInfo, thumbnail: e.target.value})}/>
            <Input className='NewForm__input' placeholder="PRECIO???? 😱" style={styles.form_input} onChange={e => {setFormInfo({...formInfo, price: e.target.value}); console.log(formInfo)}}/>
            <Button type="primary" style={{...styles.form_input, marginTop: '20px', justifyContent: 'center'}} onClick={handleSubmit}>FIN</Button>
        </form>
    )
}

export default NewForm;