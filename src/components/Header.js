import React from 'react'
import { Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>Header Component</h1>
            <Link to='/'>Survey</Link>
            <Link to= '/Graphs'>Graphs </Link>
        </div>
    )
}
