import {tags} from 'ziko';
const {svg} = tags;
const ListFilter = (props) => 
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
    tags.path({"d":"M3 6h18"}),
	tags.path({"d":"M7 12h10"}),
	tags.path({"d":"M10 18h4"})
    )
export default ListFilter;
