import {tags} from 'ziko';
const {svg} = tags;
const Castle = (props) => 
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
    tags.path({"d":"M10 5V3"}),
	tags.path({"d":"M14 5V3"}),
	tags.path({"d":"M15 21v-3a3 3 0 0 0-6 0v3"}),
	tags.path({"d":"M18 3v8"}),
	tags.path({"d":"M18 5H6"}),
	tags.path({"d":"M22 11H2"}),
	tags.path({"d":"M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"}),
	tags.path({"d":"M6 3v8"})
    )
export default Castle;
