import {tags} from 'ziko';
const {svg} = tags;
const Italic = (props) => 
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
    tags.line({"x1":"19","x2":"10","y1":"4","y2":"4"}),
	tags.line({"x1":"14","x2":"5","y1":"20","y2":"20"}),
	tags.line({"x1":"15","x2":"9","y1":"4","y2":"20"})
    )
export default Italic;
