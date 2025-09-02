import {tags} from 'ziko';
const {svg} = tags;
const ListChevronsDownUp = (props) => 
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
    tags.path({"d":"m15 18 3-3 3 3"}),
	tags.path({"d":"m15 6 3 3 3-3"}),
	tags.path({"d":"M3 12h8"}),
	tags.path({"d":"M3 18h8"}),
	tags.path({"d":"M3 6h8"})
    )
export default ListChevronsDownUp;
