import {tags} from 'ziko';
const {svg} = tags;
const CalendarSync = (props) => 
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
    tags.path({"d":"M11 10v4h4"}),
	tags.path({"d":"m11 14 1.535-1.605a5 5 0 0 1 8 1.5"}),
	tags.path({"d":"M16 2v4"}),
	tags.path({"d":"m21 18-1.535 1.605a5 5 0 0 1-8-1.5"}),
	tags.path({"d":"M21 22v-4h-4"}),
	tags.path({"d":"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"}),
	tags.path({"d":"M3 10h4"}),
	tags.path({"d":"M8 2v4"})
    )
export default CalendarSync;
