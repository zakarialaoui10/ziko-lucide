import {tags} from 'ziko';
const {svg} = tags;
const Link2Off = (props) => 
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
    tags.path({"d":"M9 17H7A5 5 0 0 1 7 7"}),
	tags.path({"d":"M15 7h2a5 5 0 0 1 4 8"}),
	tags.line({"x1":"8","x2":"12","y1":"12","y2":"12"}),
	tags.line({"x1":"2","x2":"22","y1":"2","y2":"22"})
    )
export default Link2Off;
