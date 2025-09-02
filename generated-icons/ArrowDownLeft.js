import {tags} from 'ziko';
const {svg} = tags;
const ArrowDownLeft = (props) => 
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
    tags.path({"d":"M17 7 7 17"}),
	tags.path({"d":"M17 17H7V7"})
    )
export default ArrowDownLeft;
