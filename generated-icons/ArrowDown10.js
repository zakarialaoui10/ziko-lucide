import {tags} from 'ziko';
const {svg} = tags;
const ArrowDown10 = (props) => 
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
    tags.path({"d":"m3 16 4 4 4-4"}),
	tags.path({"d":"M7 20V4"}),
	tags.path({"d":"M17 10V4h-2"}),
	tags.path({"d":"M15 10h4"}),
	tags.rect({"x":"15","y":"14","width":"4","height":"6","ry":"2"})
    )
export default ArrowDown10;
