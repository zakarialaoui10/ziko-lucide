import {tags} from 'ziko';
const {svg} = tags;
const CalendarFold = (props) => 
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
	tags.path({"d":"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}),
	tags.path({"d":"M3 10h18"}),
	tags.path({"d":"M15 22v-4a2 2 0 0 1 2-2h4"})
    )
export default CalendarFold;
