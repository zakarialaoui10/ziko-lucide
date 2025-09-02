import {tags} from 'ziko';
const {svg} = tags;
const Construction = (props) => 
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
    tags.rect({"x":"2","y":"6","width":"20","height":"8","rx":"1"}),
	tags.path({"d":"M17 14v7"}),
	tags.path({"d":"M7 14v7"}),
	tags.path({"d":"M17 3v3"}),
	tags.path({"d":"M7 3v3"}),
	tags.path({"d":"M10 14 2.3 6.3"}),
	tags.path({"d":"m14 6 7.7 7.7"}),
	tags.path({"d":"m8 6 8 8"})
    )
export default Construction;
