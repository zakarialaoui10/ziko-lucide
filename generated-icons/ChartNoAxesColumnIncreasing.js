import {tags} from 'ziko';
const {svg} = tags;
const ChartNoAxesColumnIncreasing = (props) => 
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
    tags.line({"x1":"12","x2":"12","y1":"20","y2":"10"}),
	tags.line({"x1":"18","x2":"18","y1":"20","y2":"4"}),
	tags.line({"x1":"6","x2":"6","y1":"20","y2":"16"})
    )
export default ChartNoAxesColumnIncreasing;
