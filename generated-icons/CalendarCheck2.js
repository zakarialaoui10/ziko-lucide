import {tags} from 'ziko';
const {svg} = tags;
const CalendarCheck2 = (props) => 
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
	tags.path({"d":"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}),
	tags.path({"d":"M3 10h18"}),
	tags.path({"d":"m16 20 2 2 4-4"})
    )
export default CalendarCheck2;
