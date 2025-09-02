import {tags} from 'ziko';
const {svg} = tags;
const SquareArrowUpRight = (props) => 
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
	tags.path({"d":"M8 8h8v8"}),
	tags.path({"d":"m8 16 8-8"})
    )
export default SquareArrowUpRight;
