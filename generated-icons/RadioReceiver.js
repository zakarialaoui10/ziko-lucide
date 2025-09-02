import {tags} from 'ziko';
const {svg} = tags;
const RadioReceiver = (props) => 
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
    tags.path({"d":"M5 16v2"}),
	tags.path({"d":"M19 16v2"}),
	tags.rect({"width":"20","height":"8","x":"2","y":"8","rx":"2"}),
	tags.path({"d":"M18 12h.01"})
    )
export default RadioReceiver;
