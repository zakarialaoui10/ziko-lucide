import {tags} from 'ziko';
const {svg} = tags;
const ListCheck = (props) => 
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
    tags.path({"d":"M11 18H3"}),
	tags.path({"d":"m15 18 2 2 4-4"}),
	tags.path({"d":"M16 12H3"}),
	tags.path({"d":"M16 6H3"})
    )
export default ListCheck;
