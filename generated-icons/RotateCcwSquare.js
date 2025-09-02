import {tags} from 'ziko';
const {svg} = tags;
const RotateCcwSquare = (props) => 
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
    tags.path({"d":"M20 9V7a2 2 0 0 0-2-2h-6"}),
	tags.path({"d":"m15 2-3 3 3 3"}),
	tags.path({"d":"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"})
    )
export default RotateCcwSquare;
