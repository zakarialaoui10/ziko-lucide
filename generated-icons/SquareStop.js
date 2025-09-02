import {tags} from 'ziko';
const {svg} = tags;
const SquareStop = (props) => 
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
	tags.rect({"x":"9","y":"9","width":"6","height":"6","rx":"1"})
    )
export default SquareStop;
