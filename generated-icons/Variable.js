import {tags} from 'ziko';
const {svg} = tags;
const Variable = (props) => 
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
    tags.path({"d":"M8 21s-4-3-4-9 4-9 4-9"}),
	tags.path({"d":"M16 3s4 3 4 9-4 9-4 9"}),
	tags.line({"x1":"15","x2":"9","y1":"9","y2":"15"}),
	tags.line({"x1":"9","x2":"15","y1":"9","y2":"15"})
    )
export default Variable;
