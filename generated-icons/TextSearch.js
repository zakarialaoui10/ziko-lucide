import {tags} from 'ziko';
const {svg} = tags;
const TextSearch = (props) => 
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
    tags.path({"d":"M21 6H3"}),
	tags.path({"d":"M10 12H3"}),
	tags.path({"d":"M10 18H3"}),
	tags.circle({"cx":"17","cy":"15","r":"3"}),
	tags.path({"d":"m21 19-1.9-1.9"})
    )
export default TextSearch;
