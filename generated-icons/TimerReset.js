import {tags} from 'ziko';
const {svg} = tags;
const TimerReset = (props) => 
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
	tags.path({"d":"M12 14v-4"}),
	tags.path({"d":"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}),
	tags.path({"d":"M9 17H4v5"})
    )
export default TimerReset;
