import {tags} from 'ziko';
const {svg} = tags;
const MoveUpLeft = (props) => 
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
    tags.path({"d":"M5 11V5H11"}),
	tags.path({"d":"M5 5L19 19"})
    )
export default MoveUpLeft;
