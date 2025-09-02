import {tags} from 'ziko';
const {svg} = tags;
const MonitorDot = (props) => 
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
    tags.path({"d":"M12 17v4"}),
	tags.path({"d":"M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693"}),
	tags.path({"d":"M8 21h8"}),
	tags.circle({"cx":"19","cy":"6","r":"3"})
    )
export default MonitorDot;
