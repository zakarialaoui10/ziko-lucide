import {tags} from 'ziko';
const {svg} = tags;
const CornerUpLeft = (props) => 
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
    tags.path({"d":"M20 20v-7a4 4 0 0 0-4-4H4"}),
	tags.path({"d":"M9 14 4 9l5-5"})
    )
export default CornerUpLeft;
