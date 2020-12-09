import React from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { setModalAction } from '../../actions/modal-actions';

const Form = () => {
    const dispatch = useDispatch();
    return (
        <form className="form">
              <h3>Adding Student</h3>
              <span className="form-close" onClick={() => dispatch(setModalAction())}>&#10008;</span>
              <input type="text" placeholder="Name" className="form-input"  />
              <input type="text" placeholder="Parent" className="form-input" />
              <input type="text" placeholder="Phone" className="form-input" />
              <textarea placeholder="Address" className="form-textarea" />
              <button className="form-button">Add</button>
        </form>
    )
}

export default Form
