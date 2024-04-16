import React, { useContext, useState } from 'react'
import { Newcontext } from '../Routing/Router'
import { useNavigate, useParams } from 'react-router-dom'
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
        <div>
            <Form onSubmit={handleSubmit} >
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
            </Form>
        </div>
    )
}

export default Edit