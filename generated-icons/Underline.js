import {tags} from 'ziko';
const {svg} = tags;
const Underline = (props) => 
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
    tags.path({"d":"M6 4v6a6 6 0 0 0 12 0V4"}),
	tags.line({"x1":"4","x2":"20","y1":"20","y2":"20"})
    )
export default Underline;
