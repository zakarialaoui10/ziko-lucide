import {tags} from 'ziko';
const {svg} = tags;
const BatteryCharging = (props) => 
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
    tags.path({"d":"m11 7-3 5h4l-3 5"}),
	tags.path({"d":"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"}),
	tags.path({"d":"M22 14v-4"}),
	tags.path({"d":"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"})
    )
export default BatteryCharging;
