import {tags} from 'ziko';
const {svg} = tags;
const MonitorOff = (props) => 
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
    tags.path({"d":"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}),
	tags.path({"d":"M22 15V5a2 2 0 0 0-2-2H9"}),
	tags.path({"d":"M8 21h8"}),
	tags.path({"d":"M12 17v4"}),
	tags.path({"d":"m2 2 20 20"})
    )
export default MonitorOff;
