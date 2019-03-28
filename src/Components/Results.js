import React, { Component } from 'react';
import {ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip} from 'recharts'
const P  = 0;
const J  = 1;
const F  = 2;

const fails = {
    h1: "Uh oh! You have less attendance"
}

const pass = {
    h1: "Rejoice! You have a good attendance"
}

const just = {
    h1: "Take care! Your attendance is just above 75!"
}

const ps = [pass, just, fails]

export class Results extends Component {
    
    state = {
        less: F,
        subs: []
    }

    chartify = subs => {
        return subs.map(sub =>{
            return {
                ...sub,
                required: 75,
                max: 100
            }
        });
    }

    componentDidMount() {
        const {results} = this.props;
        let {result: subs, avg} = results;
        subs = this.chartify(subs);
        this.setState({subs});
        if (avg < 75) {
            this.setState({less: F});
            document.body.style.background = "#c0392b";
        } else if (avg >= 75 && avg < 80) {
            this.setState({less: J});
            document.body.style.background = "#f1c40f";
        } else {
            this.setState({less: P});
            document.body.style.background = "#27ae60";
        }
    }

    render() {
        const {less, subs} = this.state;
        let {avg} = this.props.results;
        const {h1} = ps[less];
        return (
        <div className="center all vertical container" style={{paddingTop: 20}}> 
            <span><h1>{h1}</h1></span>
            <p className="p">Your overall attendance is {avg.toFixed(2)}%</p>
                <div className="chart center all vertical">
                <ResponsiveContainer width="110%" height="100%">
                <RadarChart 
                margin={{ top: 20 }}
                data={subs}
                outerRadius={100}>
                <PolarGrid />
                <PolarAngleAxis dataKey="sub" />
                <Tooltip />
                <Radar name="Yours" dataKey="attendance" fill="#27ae60" opacity={0.5}/>
                <Radar name="Required" dataKey="required" fill="#e74c3c" opacity={0.5}/>
                </RadarChart>
                </ResponsiveContainer>
                </div>
        </div>
        )
    }
}

export default Results
