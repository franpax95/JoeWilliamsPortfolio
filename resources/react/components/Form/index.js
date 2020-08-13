import React from 'react';
import './styles.css';

import { Input, TextArea } from '../Input';
import { Loading } from '../util';
import { Button } from '../Button';

const Form = ({ onSubmit,onChange,showSpinner }) => {
    return(
        <form className='Form-Contact' onSubmit={onSubmit}>
             {
                showSpinner ? <Loading />   : ''
             } 
            <div className='Input-Container alignc flex'>     
                <Input name='name'  placeholder="Name" onChange={onChange}/>
            </div>
            <div className='Input-Container alignc flex'>  
                <Input name='email' type='email' placeholder='Email' onChange={onChange}/>
            </div>
            <div className='Input-Container alignc flex' >
                <Input name='subject' placeholder='Subject' onChange={onChange}/>   
            </div>
            <div className='Input-Container Input-Container-TextArea alignc flex' id='container-input'> 
                <TextArea name='message' placeholder='Message' onChange={onChange}/>
            </div>
            <Button text='Submit' type='submit' clase='submit'/>
        </form>         
    )
}

export default Form;