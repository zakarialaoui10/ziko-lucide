import {tags} from 'ziko';
const {svg} = tags;
const Turntable = (props) => 
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
    tags.path({"d":"M10 12.01h.01"}),
	tags.path({"d":"M18 8v4a8 8 0 0 1-1.07 4"}),
	tags.circle({"cx":"10","cy":"12","r":"4"}),
	tags.rect({"x":"2","y":"4","width":"20","height":"16","rx":"2"})
    )
export default Turntable;
