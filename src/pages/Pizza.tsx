import React from 'react'
import { useParams } from 'react-router-dom'

const Pizza: React.FC = () => {

    const { id } = useParams();

    return (
        <div>Pizza</div>
    )
}

export default Pizza