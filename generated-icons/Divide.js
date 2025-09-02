import {tags} from 'ziko';
const {svg} = tags;
const Divide = (props) => 
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
    tags.circle({"cx":"12","cy":"6","r":"1"}),
	tags.line({"x1":"5","x2":"19","y1":"12","y2":"12"}),
	tags.circle({"cx":"12","cy":"18","r":"1"})
    )
export default Divide;
