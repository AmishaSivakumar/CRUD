import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Newcontext } from '../Routing/Router'

function View() {
    const [data, setData] = useContext(Newcontext)
    const { details } = useParams()
    // console.log(index);
    const viewData = data[details]
    return (
        <div className='m-5 '>
            <h1>Name: {viewData.name}</h1>
            <h2>Class: {viewData.class}</h2>
            <h3>Mark: {viewData.mark}</h3>
        </div>
    )
}

export default View

