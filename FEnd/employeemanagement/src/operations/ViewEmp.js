import React, { useState } from 'react';

function ViewEmp() {
    const [obj,setObj] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const id = document.getElementById('id').value;
        fetch(`http://localhost:8081/api/employee/${id}`,{
            method: 'GET'
        }).then(response => {
            if (!response.ok)
                throw new Error('Fail');
            return response.json();
        }).then(data => setObj(data)).catch(error => setObj(error));
    };
    return (
        <div className="ViewEmp">
            <h1>View Employee</h1>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <table border={1}>
                        <tr>
                            <td className='label'>
                                <label htmlFor="id">Id:</label>
                            </td>
                            <td className='l-ip'>
                                <input type='number' name='id' id='id' />
                            </td>
                        </tr>
                        <tr>
                            <td className='label'>
                                {obj.id}
                            </td>
                            <td className='l-ip'>
                                {obj.name}
                            </td>
                        </tr>
                        <tr>
                            <td className='label'>
                                {obj.branch}
                            </td>
                            <td className='l-ip'>
                                {obj.salary}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit" className='s-btn'>Find Employee</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    );
}

export default ViewEmp;