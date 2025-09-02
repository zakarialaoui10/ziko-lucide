import {tags} from 'ziko';
const {svg} = tags;
const EqualNot = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.line({"x1":"5","x2":"19","y1":"9","y2":"9"}),
	tags.line({"x1":"5","x2":"19","y1":"15","y2":"15"}),
	tags.line({"x1":"19","x2":"5","y1":"5","y2":"19"})
    )
export default EqualNot;
