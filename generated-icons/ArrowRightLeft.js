import {tags} from 'ziko';
const {svg} = tags;
const ArrowRightLeft = (props) => 
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
    tags.path({"d":"m16 3 4 4-4 4"}),
	tags.path({"d":"M20 7H4"}),
	tags.path({"d":"m8 21-4-4 4-4"}),
	tags.path({"d":"M4 17h16"})
    )
export default ArrowRightLeft;
