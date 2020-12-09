import React from 'react';
import './showcase.css';
import { useSelector } from 'react-redux';
import Student from '../student/Student';

const Showcase = () => {
    const students = useSelector(state => state.students)
    
    // const students = null;
    console.log(students)
    
    if(students) {
        return <div className="showcase__list">
            <h1>Student List</h1>
            <table className="table">
                <tr className="table__header">
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Parent</th>  
                    <th>Address</th>
                </tr>
                {
                    students.map(student => <Student student={student} key={student.id} />)
                }
            </table>
        </div>
    }

    return (
        <div className="showcase">
            <div>There is no student.</div>
        </div>
    )
}

export default Showcase
