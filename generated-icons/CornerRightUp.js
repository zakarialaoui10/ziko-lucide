import {tags} from 'ziko';
const {svg} = tags;
const CornerRightUp = (props) => 
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
    tags.path({"d":"m10 9 5-5 5 5"}),
	tags.path({"d":"M4 20h7a4 4 0 0 0 4-4V4"})
    )
export default CornerRightUp;
