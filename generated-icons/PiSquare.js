import {tags} from 'ziko';
const {svg} = tags;
const PiSquare = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2"}),
	tags.path({"d":"M7 7h10"}),
	tags.path({"d":"M10 7v10"}),
	tags.path({"d":"M16 17a2 2 0 0 1-2-2V7"})
    )
export default PiSquare;
