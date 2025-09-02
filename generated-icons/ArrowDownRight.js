import {tags} from 'ziko';
const {svg} = tags;
const ArrowDownRight = (props) => 
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
    tags.path({"d":"m7 7 10 10"}),
	tags.path({"d":"M17 7v10H7"})
    )
export default ArrowDownRight;
