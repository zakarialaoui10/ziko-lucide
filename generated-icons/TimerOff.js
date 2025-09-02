import {tags} from 'ziko';
const {svg} = tags;
const TimerOff = (props) => 
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
    tags.path({"d":"M10 2h4"}),
	tags.path({"d":"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}),
	tags.path({"d":"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M12 12v-2"})
    )
export default TimerOff;
