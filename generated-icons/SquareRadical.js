import {tags} from 'ziko';
const {svg} = tags;
const SquareRadical = (props) => 
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
    tags.path({"d":"M7 12h2l2 5 2-10h4"}),
	tags.rect({"x":"3","y":"3","width":"18","height":"18","rx":"2"})
    )
export default SquareRadical;
