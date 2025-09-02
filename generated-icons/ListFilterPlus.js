import {tags} from 'ziko';
const {svg} = tags;
const ListFilterPlus = (props) => 
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
    tags.path({"d":"M10 18h4"}),
	tags.path({"d":"M11 6H3"}),
	tags.path({"d":"M15 6h6"}),
	tags.path({"d":"M18 9V3"}),
	tags.path({"d":"M7 12h8"})
    )
export default ListFilterPlus;
