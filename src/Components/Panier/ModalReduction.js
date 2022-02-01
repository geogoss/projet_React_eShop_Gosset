import React from 'react';
import "./ModalReduction.css"

export default function ModalReduction(props) {
    return (
        <div className='cadreModalReduction'>
            <div className="reduc">
                <p onClick={props.modalReductionOnOf} className='leX text-end'>X</p>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <p>Vous avez une réduction de</p>
                    <p className='fs-1 text-success fw-bold'>10 %</p>
                </div>

            </div>
        </div>
    );
}
