import {tags} from 'ziko';
const {svg} = tags;
const SquareSplitHorizontal = (props) => 
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
    tags.path({"d":"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}),
	tags.path({"d":"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}),
	tags.line({"x1":"12","x2":"12","y1":"4","y2":"20"})
    )
export default SquareSplitHorizontal;
