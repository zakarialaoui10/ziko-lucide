import {tags} from 'ziko';
const {svg} = tags;
const CalendarPlus2 = (props) => 
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
    tags.path({"d":"M8 2v4"}),
	tags.path({"d":"M16 2v4"}),
	tags.rect({"width":"18","height":"18","x":"3","y":"4","rx":"2"}),
	tags.path({"d":"M3 10h18"}),
	tags.path({"d":"M10 16h4"}),
	tags.path({"d":"M12 14v4"})
    )
export default CalendarPlus2;
