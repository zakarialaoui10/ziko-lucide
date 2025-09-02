import {tags} from 'ziko';
const {svg} = tags;
const ArrowUpRight = (props) => 
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
    tags.path({"d":"M7 7h10v10"}),
	tags.path({"d":"M7 17 17 7"})
    )
export default ArrowUpRight;
