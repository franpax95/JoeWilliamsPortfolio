import React from 'react';
import './Modal.css';
import {Button,ButtonLink} from '../Button';
import { Link } from 'react-router-dom';

export const Modal = ({sentEmail,onClickButton}) => {

    const showMessageEmail = () => {
        if(sentEmail) {
            if (window.innerWidth <= 480) {
                return(
                    <>
                        <p className='text-modal'>THANKS FOR SAYING</p>
                        <p className='text-modal text-hello'>HELLO!</p>
                    </>   
                )
            } else {
                return(
                    <p className='text-modal'>THANKS FOR SAYING HELLO!</p>
                )
            }
        } else {
            return (
                <>
                    <p className='text-modal-wrong' style={{marginBottom: 10 + 'px'}}>OOPS!</p>
                    <p className='text-modal-wrong' style={{marginBottom: 10 + 'px'}}>SOMETHING WENT WRONG</p>
                    <p className='text-modal-wrong'>CHECK DETAILS</p>
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
                sentEmail ?  <Button text='HOME' type='button' clase='modal-button' onClick={onClickButton}/> :  <Button text='RETRY' type='button' clase='modal-button' onClick={onClickButton }/>
            }
        </div>
    </div>
    )
}