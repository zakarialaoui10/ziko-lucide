import {tags} from 'ziko';
const {svg} = tags;
const RockingChair = (props) => 
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
    tags.polyline({"points":"3.5 2 6.5 12.5 18 12.5"}),
	tags.line({"x1":"9.5","x2":"5.5","y1":"12.5","y2":"20"}),
	tags.line({"x1":"15","x2":"18.5","y1":"12.5","y2":"20"}),
	tags.path({"d":"M2.75 18a13 13 0 0 0 18.5 0"})
    )
export default RockingChair;
