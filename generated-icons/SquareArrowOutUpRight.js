import {tags} from 'ziko';
const {svg} = tags;
const SquareArrowOutUpRight = (props) => 
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
    tags.path({"d":"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}),
	tags.path({"d":"m21 3-9 9"}),
	tags.path({"d":"M15 3h6v6"})
    )
export default SquareArrowOutUpRight;
