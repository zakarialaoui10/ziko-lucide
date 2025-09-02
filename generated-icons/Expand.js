import {tags} from 'ziko';
const {svg} = tags;
const Expand = (props) => 
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
    tags.path({"d":"m15 15 6 6"}),
	tags.path({"d":"m15 9 6-6"}),
	tags.path({"d":"M21 16v5h-5"}),
	tags.path({"d":"M21 8V3h-5"}),
	tags.path({"d":"M3 16v5h5"}),
	tags.path({"d":"m3 21 6-6"}),
	tags.path({"d":"M3 8V3h5"}),
	tags.path({"d":"M9 9 3 3"})
    )
export default Expand;
