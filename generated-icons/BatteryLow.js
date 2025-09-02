import {tags} from 'ziko';
const {svg} = tags;
const BatteryLow = (props) => 
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
    tags.path({"d":"M22 14v-4"}),
	tags.path({"d":"M6 14v-4"}),
	tags.rect({"x":"2","y":"6","width":"16","height":"12","rx":"2"})
    )
export default BatteryLow;
