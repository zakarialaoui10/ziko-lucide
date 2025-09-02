import {tags} from 'ziko';
const {svg} = tags;
const Pi = (props) => 
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
    tags.line({"x1":"9","x2":"9","y1":"4","y2":"20"}),
	tags.path({"d":"M4 7c0-1.7 1.3-3 3-3h13"}),
	tags.path({"d":"M18 20c-1.7 0-3-1.3-3-3V4"})
    )
export default Pi;
