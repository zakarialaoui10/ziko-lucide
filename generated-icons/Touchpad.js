import {tags} from 'ziko';
const {svg} = tags;
const Touchpad = (props) => 
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
    tags.rect({"width":"20","height":"16","x":"2","y":"4","rx":"2"}),
	tags.path({"d":"M2 14h20"}),
	tags.path({"d":"M12 20v-6"})
    )
export default Touchpad;
