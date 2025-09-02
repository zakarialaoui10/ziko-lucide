import {tags} from 'ziko';
const {svg} = tags;
const Smile = (props) => 
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
	tags.path({"d":"M8 14s1.5 2 4 2 4-2 4-2"}),
	tags.line({"x1":"9","x2":"9.01","y1":"9","y2":"9"}),
	tags.line({"x1":"15","x2":"15.01","y1":"9","y2":"9"})
    )
export default Smile;
