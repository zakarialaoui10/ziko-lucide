import {tags} from 'ziko';
const {svg} = tags;
const ArrowUpNarrowWide = (props) => 
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
    tags.path({"d":"m3 8 4-4 4 4"}),
	tags.path({"d":"M7 4v16"}),
	tags.path({"d":"M11 12h4"}),
	tags.path({"d":"M11 16h7"}),
	tags.path({"d":"M11 20h10"})
    )
export default ArrowUpNarrowWide;
