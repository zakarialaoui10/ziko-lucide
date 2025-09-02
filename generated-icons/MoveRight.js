import {tags} from 'ziko';
const {svg} = tags;
const MoveRight = (props) => 
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
    tags.path({"d":"M18 8L22 12L18 16"}),
	tags.path({"d":"M2 12H22"})
    )
export default MoveRight;
