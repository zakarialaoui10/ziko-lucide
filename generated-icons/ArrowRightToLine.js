import {tags} from 'ziko';
const {svg} = tags;
const ArrowRightToLine = (props) => 
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
    tags.path({"d":"M17 12H3"}),
	tags.path({"d":"m11 18 6-6-6-6"}),
	tags.path({"d":"M21 5v14"})
    )
export default ArrowRightToLine;
