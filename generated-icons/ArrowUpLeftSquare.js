import {tags} from 'ziko';
const {svg} = tags;
const ArrowUpLeftSquare = (props) => 
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
	tags.path({"d":"M8 16V8h8"}),
	tags.path({"d":"M16 16 8 8"})
    )
export default ArrowUpLeftSquare;
