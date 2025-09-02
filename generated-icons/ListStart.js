import {tags} from 'ziko';
const {svg} = tags;
const ListStart = (props) => 
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
    tags.path({"d":"M16 12H3"}),
	tags.path({"d":"M16 18H3"}),
	tags.path({"d":"M10 6H3"}),
	tags.path({"d":"M21 18V8a2 2 0 0 0-2-2h-5"}),
	tags.path({"d":"m16 8-2-2 2-2"})
    )
export default ListStart;
