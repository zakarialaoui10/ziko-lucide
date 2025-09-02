import {tags} from 'ziko';
const {svg} = tags;
const AlignCenter = (props) => 
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
    tags.path({"d":"M17 12H7"}),
	tags.path({"d":"M19 18H5"}),
	tags.path({"d":"M21 6H3"})
    )
export default AlignCenter;
