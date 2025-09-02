import {tags} from 'ziko';
const {svg} = tags;
const PaintRoller = (props) => 
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
    tags.rect({"width":"16","height":"6","x":"2","y":"2","rx":"2"}),
	tags.path({"d":"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}),
	tags.rect({"width":"4","height":"6","x":"8","y":"16","rx":"1"})
    )
export default PaintRoller;
