import React from 'react';

function DeleteEmp() {
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const id = document.getElementById('id').value;
        fetch(`http://localhost:8081/api/employee/${id}`,{
            method: 'DELETE'
        }).then(response =>{
            if(!response.ok)
                throw new Error('Fail');
            return response.json().catch(error => console.error(error));
        });
    }
    return (
        <div className="DeleteEmp">
            <h1>Delete Employee</h1>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <table>
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
                            </td>
                            <td className='l-ip'>
                            </td>
                        </tr>
                        <tr>
                            <td className='label'>
                            </td>
                            <td className='l-ip'>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit" className='s-btn'>Delete Employee</button>
                            </td>
                        </tr>
                    </table>
                </div>

            </form>
        </div>
    );
}

export default DeleteEmp;