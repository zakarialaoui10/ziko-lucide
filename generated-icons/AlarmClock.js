import {tags} from 'ziko';
const {svg} = tags;
const AlarmClock = (props) => 
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
    tags.circle({"cx":"12","cy":"13","r":"8"}),
	tags.path({"d":"M12 9v4l2 2"}),
	tags.path({"d":"M5 3 2 6"}),
	tags.path({"d":"m22 6-3-3"}),
	tags.path({"d":"M6.38 18.7 4 21"}),
	tags.path({"d":"M17.64 18.67 20 21"})
    )
export default AlarmClock;
