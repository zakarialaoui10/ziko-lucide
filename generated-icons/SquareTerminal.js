import {tags} from 'ziko';
const {svg} = tags;
const SquareTerminal = (props) => 
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
    tags.path({"d":"m7 11 2-2-2-2"}),
	tags.path({"d":"M11 13h4"}),
	tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"})
    )
export default SquareTerminal;
