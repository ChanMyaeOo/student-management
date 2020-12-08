import React from 'react';
import './showcase.css';

const Showcase = () => {
    const student = true;

    if(student) {
        return <div className="showcase__list">
            <h1>Student List</h1>
            <table className="table">
                <tr className="table__header">
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Parent</th>  
                    <th>Address</th>
                </tr>
                <tr>
                    <td>Kyaw Kyaw</td>
                    <td>09976754676</td>
                    <td>U Hla Myint</td>
                    <td>Aung Mingalar</td>
                </tr>

                 <tr>
                    <td>Kyaw Kyaw</td>
                    <td>09976754676</td>
                    <td>U Hla Myint</td>
                    <td>Aung Mingalar</td>
                </tr>

                 <tr>
                    <td>Kyaw Kyaw</td>
                    <td>09976754676</td>
                    <td>U Hla Myint</td>
                    <td>Aung Mingalar</td>
                </tr>
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
