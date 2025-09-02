import {tags} from 'ziko';
const {svg} = tags;
const RemoveFormatting = (props) => 
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
    tags.path({"d":"M4 7V4h16v3"}),
	tags.path({"d":"M5 20h6"}),
	tags.path({"d":"M13 4 8 20"}),
	tags.path({"d":"m15 15 5 5"}),
	tags.path({"d":"m20 15-5 5"})
    )
export default RemoveFormatting;
