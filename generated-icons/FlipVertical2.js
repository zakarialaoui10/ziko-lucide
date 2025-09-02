import {tags} from 'ziko';
const {svg} = tags;
const FlipVertical2 = (props) => 
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
    tags.path({"d":"m17 3-5 5-5-5h10"}),
	tags.path({"d":"m17 21-5-5-5 5h10"}),
	tags.path({"d":"M4 12H2"}),
	tags.path({"d":"M10 12H8"}),
	tags.path({"d":"M16 12h-2"}),
	tags.path({"d":"M22 12h-2"})
    )
export default FlipVertical2;
