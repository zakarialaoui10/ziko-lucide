import {tags} from 'ziko';
const {svg} = tags;
const SquareSquare = (props) => 
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
    tags.rect({"x":"3","y":"3","width":"18","height":"18","rx":"2"}),
	tags.rect({"x":"8","y":"8","width":"8","height":"8","rx":"1"})
    )
export default SquareSquare;
