import {tags} from 'ziko';
const {svg} = tags;
const Meh = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.line({"x1":"8","x2":"16","y1":"15","y2":"15"}),
	tags.line({"x1":"9","x2":"9.01","y1":"9","y2":"9"}),
	tags.line({"x1":"15","x2":"15.01","y1":"9","y2":"9"})
    )
export default Meh;
