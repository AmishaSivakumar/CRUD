import React, { useContext, useState } from 'react'
import { Newcontext } from '../Routing/Router'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

function Edit() {
    const navigate = useNavigate()
    const [data, setData] = useContext(Newcontext)
    const { id } = useParams()
    const editData = data[id]
    const [edit, setEdit] = useState(editData)
    const handleChange = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = [...data, edit]
        setData(newData)
        navigate('/')
    }
    return (
        <div className='container mt-5'>
            <h3 className='text-center'>EDIT</h3>
            <hr /> <br />
            <Form onSubmit={handleSubmit} className='border border-dark p-5'>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={edit.name} onChange={handleChange} name='name' />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Class</Form.Label>
                    <Form.Control type="text" value={edit.class} onChange={handleChange} name='class' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mark</Form.Label>
                    <Form.Control type="text" value={edit.mark} onChange={handleChange} name='mark' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to={'/'} className='ms-3'>
                    <Button variant="secondary"> Cancel</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Edit