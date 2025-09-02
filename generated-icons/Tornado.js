import {tags} from 'ziko';
const {svg} = tags;
const Tornado = (props) => 
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
    tags.path({"d":"M21 4H3"}),
	tags.path({"d":"M18 8H6"}),
	tags.path({"d":"M19 12H9"}),
	tags.path({"d":"M16 16h-6"}),
	tags.path({"d":"M11 20H9"})
    )
export default Tornado;
