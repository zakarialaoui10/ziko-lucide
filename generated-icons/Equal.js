import {tags} from 'ziko';
const {svg} = tags;
const Equal = (props) => 
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
	tags.line({"x1":"5","x2":"19","y1":"15","y2":"15"})
    )
export default Equal;
