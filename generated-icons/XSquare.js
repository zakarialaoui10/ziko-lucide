import {tags} from 'ziko';
const {svg} = tags;
const XSquare = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}),
	tags.path({"d":"m15 9-6 6"}),
	tags.path({"d":"m9 9 6 6"})
    )
export default XSquare;
