import {tags} from 'ziko';
const {svg} = tags;
const Tablet = (props) => 
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
    tags.rect({"width":"16","height":"20","x":"4","y":"2","rx":"2","ry":"2"}),
	tags.line({"x1":"12","x2":"12.01","y1":"18","y2":"18"})
    )
export default Tablet;
