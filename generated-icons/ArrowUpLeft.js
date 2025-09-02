import {tags} from 'ziko';
const {svg} = tags;
const ArrowUpLeft = (props) => 
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
    tags.path({"d":"M7 17V7h10"}),
	tags.path({"d":"M17 17 7 7"})
    )
export default ArrowUpLeft;
