import {tags} from 'ziko';
const {svg} = tags;
const ArrowsUpFromLine = (props) => 
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
    tags.path({"d":"m4 6 3-3 3 3"}),
	tags.path({"d":"M7 17V3"}),
	tags.path({"d":"m14 6 3-3 3 3"}),
	tags.path({"d":"M17 17V3"}),
	tags.path({"d":"M4 21h16"})
    )
export default ArrowsUpFromLine;
