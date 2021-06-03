import React from 'react'
import Graph from './common/Graph'

export default function Graphs() {


    return (
        <div>
            <h1>Graph Component</h1>
            <Graph title="Bullet Rating vs Coordinates" data={[
                {'rating':1000, 'cordinateAvg': 8 },
                {'rating':1500, 'cordinateAvg': 12 },
                {'rating':2000, 'cordinateAvg': 20 },
            ]} />

        </div>
    )
}
