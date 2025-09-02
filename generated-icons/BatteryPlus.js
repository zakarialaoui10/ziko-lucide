import {tags} from 'ziko';
const {svg} = tags;
const BatteryPlus = (props) => 
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
    tags.path({"d":"M10 9v6"}),
	tags.path({"d":"M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605"}),
	tags.path({"d":"M22 14v-4"}),
	tags.path({"d":"M7 12h6"}),
	tags.path({"d":"M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606"})
    )
export default BatteryPlus;
