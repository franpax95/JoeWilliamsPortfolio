import React, { useState } from 'react';
import './Contact.css';

import axios from 'axios';

import Form from '../../components/Form';
import { SpaceBetween } from '../../components/util';
import { Modal } from '../../components/Modal';


const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [sentEmail, setsentEmail] = useState(false);

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowSpinner(true)   
        sendEmail();
    }

    const sendEmail = () => {
        axios.post('/api/sendMail', form).then( resp => {
            setsentEmail(true)
            setShowSpinner(false)
            setShowModal(true)
         }).catch((error) => {
             setsentEmail(false)
             setShowSpinner(false)
             setShowModal(true)
         })
    }

    return(
        <div className="Contact-Container flex justifyc">
            {showModal ? <Modal sentEmail={sentEmail} onClickButton={() => setShowModal(false)}/> : ''}
            <SpaceBetween height="45vh" />
            <Form onSubmit={handleSubmit} onChange={handleInputChange} showSpinner={showSpinner}/>
        </div>
    );
}

export default Contact;