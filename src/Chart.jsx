import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
const Chart = () => {
    const [data] = useState([200, 250, 60, 150, 100, 175])
    const svgRef = useRef();

    useEffect(() => {

        // //setting up svg container
        // const w = 400;
        // const h = 300;
        // const svg = d3.selector(svgRef.current)
        //     .attr('width', w)
        //     .attr('height', h)
        //     .style('overflow', 'visible')
        //     .style('margin-top', '75px');

        // //setting scaling factor
        // const xScale = d3.scaleBand().domain(data.map((val, i) => i))
        //     .range([0, w])
        //     .padding(0.5);

        // const yScale = d3.scaleLinear()
        //     .domain([0, h])
        //     .range([h, 0]);
        // //setting axes scale

        // const xAxis = d3.axisBottom(xScale)
        //     .tickArguments(data.length)

        // const yAxis = d3.axisLeft(yScale)
        //     .ticks(5);

        // svg.append('g')
        //     .call(xAxis)
        //     .attr('transform', `translate(0,${h})`)
        // svg.append('g').call(yAxis);

        //setting setting svg data

        // svg.selectAll('.bar').attr('transform')
        //     .data(data).enter
        //     .joi('rect').attr('x', (v, i) => xScale(i))
        //     .attr('y', yScale)
        //     .attr('width',xScale.bandwidth())
        //     .attr('height',val=>h-yScale(val))
    }, [data])


    return (
        <div> D3 Chart
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default Chart