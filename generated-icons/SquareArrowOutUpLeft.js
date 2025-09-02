import {tags} from 'ziko';
const {svg} = tags;
const SquareArrowOutUpLeft = (props) => 
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
    tags.path({"d":"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}),
	tags.path({"d":"m3 3 9 9"}),
	tags.path({"d":"M3 9V3h6"})
    )
export default SquareArrowOutUpLeft;
