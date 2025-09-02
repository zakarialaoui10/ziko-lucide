import {tags} from 'ziko';
const {svg} = tags;
const Currency = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"8"}),
	tags.line({"x1":"3","x2":"6","y1":"3","y2":"6"}),
	tags.line({"x1":"21","x2":"18","y1":"3","y2":"6"}),
	tags.line({"x1":"3","x2":"6","y1":"21","y2":"18"}),
	tags.line({"x1":"21","x2":"18","y1":"21","y2":"18"})
    )
export default Currency;
