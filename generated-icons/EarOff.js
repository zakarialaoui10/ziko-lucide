import {tags} from 'ziko';
const {svg} = tags;
const EarOff = (props) => 
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
    tags.path({"d":"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}),
	tags.path({"d":"M6 8.5c0-.75.13-1.47.36-2.14"}),
	tags.path({"d":"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}),
	tags.path({"d":"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}),
	tags.line({"x1":"2","x2":"22","y1":"2","y2":"22"})
    )
export default EarOff;
