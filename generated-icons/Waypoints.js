import {tags} from 'ziko';
const {svg} = tags;
const Waypoints = (props) => 
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
    tags.circle({"cx":"12","cy":"4.5","r":"2.5"}),
	tags.path({"d":"m10.2 6.3-3.9 3.9"}),
	tags.circle({"cx":"4.5","cy":"12","r":"2.5"}),
	tags.path({"d":"M7 12h10"}),
	tags.circle({"cx":"19.5","cy":"12","r":"2.5"}),
	tags.path({"d":"m13.8 17.7 3.9-3.9"}),
	tags.circle({"cx":"12","cy":"19.5","r":"2.5"})
    )
export default Waypoints;
