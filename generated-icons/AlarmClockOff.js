import {tags} from 'ziko';
const {svg} = tags;
const AlarmClockOff = (props) => 
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
    tags.path({"d":"M6.87 6.87a8 8 0 1 0 11.26 11.26"}),
	tags.path({"d":"M19.9 14.25a8 8 0 0 0-9.15-9.15"}),
	tags.path({"d":"m22 6-3-3"}),
	tags.path({"d":"M6.26 18.67 4 21"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M4 4 2 6"})
    )
export default AlarmClockOff;
