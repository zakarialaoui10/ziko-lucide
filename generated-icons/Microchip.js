import {tags} from 'ziko';
const {svg} = tags;
const Microchip = (props) => 
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
    tags.path({"d":"M18 12h2"}),
	tags.path({"d":"M18 16h2"}),
	tags.path({"d":"M18 20h2"}),
	tags.path({"d":"M18 4h2"}),
	tags.path({"d":"M18 8h2"}),
	tags.path({"d":"M4 12h2"}),
	tags.path({"d":"M4 16h2"}),
	tags.path({"d":"M4 20h2"}),
	tags.path({"d":"M4 4h2"}),
	tags.path({"d":"M4 8h2"}),
	tags.path({"d":"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"})
    )
export default Microchip;
