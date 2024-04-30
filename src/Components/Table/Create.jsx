import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Newcontext } from '../Routing/Router'

function Create() {
    const navigate = useNavigate()
    const [data, setData] = useContext(Newcontext)

    const [input, setInput] = useState({
        name: "",
        class: "",
        mark: "",
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (a) => {
        a.preventDefault();
        const newData = [...data, input]
        setData(newData);
        navigate('/')
        // console.log(newData)
    }
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>CREATE</h1>
            <hr />
            <Form className='border border-dark p-5'>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={handleChange} name='name' />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Class</Form.Label>
                    <Form.Control type="text" placeholder="Class" onChange={handleChange} name='class' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mark</Form.Label>
                    <Form.Control type="text" placeholder="Mark" onChange={handleChange} name='mark' />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
                <Link to={'/'} className='ms-3'>
                    <Button variant="secondary"> Cancel</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Create