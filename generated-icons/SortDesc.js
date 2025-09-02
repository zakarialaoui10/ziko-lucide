import {tags} from 'ziko';
const {svg} = tags;
const SortDesc = (props) => 
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
    tags.path({"d":"m3 16 4 4 4-4"}),
	tags.path({"d":"M7 20V4"}),
	tags.path({"d":"M11 4h10"}),
	tags.path({"d":"M11 8h7"}),
	tags.path({"d":"M11 12h4"})
    )
export default SortDesc;
