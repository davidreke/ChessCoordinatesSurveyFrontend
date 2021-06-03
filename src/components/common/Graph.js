import React, {useEffect} from 'react'
import * as d3 from 'd3'

export default function Graph(props) {
    
    useEffect(() => {
        console.log('use effect called')
    }, [])

    return (
        <div>
            <h1>{props.title}</h1>
            <div id={`#${props.title}`}></div>
        </div>
    )
}
