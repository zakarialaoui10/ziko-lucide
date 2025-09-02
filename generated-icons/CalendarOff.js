import {tags} from 'ziko';
const {svg} = tags;
const CalendarOff = (props) => 
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
    tags.path({"d":"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}),
	tags.path({"d":"M21 15.5V6a2 2 0 0 0-2-2H9.5"}),
	tags.path({"d":"M16 2v4"}),
	tags.path({"d":"M3 10h7"}),
	tags.path({"d":"M21 10h-5.5"}),
	tags.path({"d":"m2 2 20 20"})
    )
export default CalendarOff;
