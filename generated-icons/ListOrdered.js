import {tags} from 'ziko';
const {svg} = tags;
const ListOrdered = (props) => 
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
    tags.path({"d":"M10 12h11"}),
	tags.path({"d":"M10 18h11"}),
	tags.path({"d":"M10 6h11"}),
	tags.path({"d":"M4 10h2"}),
	tags.path({"d":"M4 6h1v4"}),
	tags.path({"d":"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"})
    )
export default ListOrdered;
