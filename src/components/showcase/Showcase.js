import React from 'react';
import './showcase.css';

const Showcase = () => {
    const student = null;

    if(student) {
        return <div className="showcase__list">Student Lists</div>
    }

    return (
        <div className="showcase">
            <div>There is no student.</div>
        </div>
    )
}

export default Showcase
