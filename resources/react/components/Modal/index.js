import React from 'react';
import './Modal.css';
import {Button,ButtonLink} from '../Button';
import { Link } from 'react-router-dom';

export const Modal = ({sentEmail,onClickButton}) => {

    const showMessageEmail = () => {
        if(sentEmail) {
            return(
                <p className='text-modal'>THANKS FOR SAYNG HELLO!</p>
            )
        } else {
            return (
                <>
                    <p className='text-modal' style={{marginBottom: 10 + 'px'}}>OOPS!</p>
                    <p className='text-modal' style={{marginBottom: 10 + 'px'}}>SOMETHING WENT WRONG</p>
                    <p className='text-modal'>CHECK DETAILS</p>
                </>
            )
        }
    }
    return(
        <div className="overlay">
        <div className="modal flex alignc justifyc">
            {
                showMessageEmail()
            }
            <br />
            {
                sentEmail ?  <Link to='/' className='modal-button alignc justifyc'>HOME</Link> :  <Button text='RETRY' type='button' clase='modal-button' onClick={onClickButton }/>
            }
        </div>
    </div>
    )
}