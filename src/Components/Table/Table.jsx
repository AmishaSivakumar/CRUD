import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Newcontext } from '../Routing/Router'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


function StudentTable() {
    const [data, setData] = useContext(Newcontext)
    // console.log(data);
    const handleDelete = (index, e) => {
        if (window.confirm("Are you sure to delete this item?")) {
            setData(data.filter((v, i) => i !== index));
        }
    }
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>MARK LIST</h1>
            <hr /> <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.class}</td>
                                <td>{item.mark}</td>
                                <td>
                                    <Link to={`/view/${index}`}>
                                        <Button variant="success">View</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/edit/${index}`}>
                                        <Button variant="primary">Edit</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={e => handleDelete(index, e)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Link to={'/create'}>
                <Button variant="primary">Create</Button>
            </Link>
        </div>
    )
}

export default StudentTable