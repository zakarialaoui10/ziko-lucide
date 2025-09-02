import {tags} from 'ziko';
const {svg} = tags;
const Fuel = (props) => 
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
    tags.line({"x1":"3","x2":"15","y1":"22","y2":"22"}),
	tags.line({"x1":"4","x2":"14","y1":"9","y2":"9"}),
	tags.path({"d":"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}),
	tags.path({"d":"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"})
    )
export default Fuel;
