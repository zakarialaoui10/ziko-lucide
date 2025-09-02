import {tags} from 'ziko';
const {svg} = tags;
const CalendarArrowDown = (props) => 
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
    tags.path({"d":"m14 18 4 4 4-4"}),
	tags.path({"d":"M16 2v4"}),
	tags.path({"d":"M18 14v8"}),
	tags.path({"d":"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"}),
	tags.path({"d":"M3 10h18"}),
	tags.path({"d":"M8 2v4"})
    )
export default CalendarArrowDown;
