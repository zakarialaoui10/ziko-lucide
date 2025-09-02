import {tags} from 'ziko';
const {svg} = tags;
const Grid3x2 = (props) => 
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
    tags.path({"d":"M15 3v18"}),
	tags.path({"d":"M3 12h18"}),
	tags.path({"d":"M9 3v18"}),
	tags.rect({"x":"3","y":"3","width":"18","height":"18","rx":"2"})
    )
export default Grid3x2;
