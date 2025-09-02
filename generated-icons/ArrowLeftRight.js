import {tags} from 'ziko';
const {svg} = tags;
const ArrowLeftRight = (props) => 
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
    tags.path({"d":"M8 3 4 7l4 4"}),
	tags.path({"d":"M4 7h16"}),
	tags.path({"d":"m16 21 4-4-4-4"}),
	tags.path({"d":"M20 17H4"})
    )
export default ArrowLeftRight;
