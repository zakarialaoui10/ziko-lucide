import {tags} from 'ziko';
const {svg} = tags;
const ArrowLeftToLine = (props) => 
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
    tags.path({"d":"M3 19V5"}),
	tags.path({"d":"m13 6-6 6 6 6"}),
	tags.path({"d":"M7 12h14"})
    )
export default ArrowLeftToLine;
