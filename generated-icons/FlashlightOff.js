import {tags} from 'ziko';
const {svg} = tags;
const FlashlightOff = (props) => 
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
    tags.path({"d":"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}),
	tags.path({"d":"M7 2h11v4c0 2-2 2-2 4v1"}),
	tags.line({"x1":"11","x2":"18","y1":"6","y2":"6"}),
	tags.line({"x1":"2","x2":"22","y1":"2","y2":"22"})
    )
export default FlashlightOff;
