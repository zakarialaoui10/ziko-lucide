import {tags} from 'ziko';
const {svg} = tags;
const CalendarRange = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"4","rx":"2"}),
	tags.path({"d":"M16 2v4"}),
	tags.path({"d":"M3 10h18"}),
	tags.path({"d":"M8 2v4"}),
	tags.path({"d":"M17 14h-6"}),
	tags.path({"d":"M13 18H7"}),
	tags.path({"d":"M7 14h.01"}),
	tags.path({"d":"M17 18h.01"})
    )
export default CalendarRange;
