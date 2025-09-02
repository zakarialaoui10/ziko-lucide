import {tags} from 'ziko';
const {svg} = tags;
const BatteryWarning = (props) => 
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
    tags.path({"d":"M10 17h.01"}),
	tags.path({"d":"M10 7v6"}),
	tags.path({"d":"M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"}),
	tags.path({"d":"M22 14v-4"}),
	tags.path({"d":"M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"})
    )
export default BatteryWarning;
