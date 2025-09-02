import {tags} from 'ziko';
const {svg} = tags;
const ListCollapse = (props) => 
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
	tags.path({"d":"m3 10 3-3-3-3"}),
	tags.path({"d":"m3 20 3-3-3-3"})
    )
export default ListCollapse;
