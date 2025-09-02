import {tags} from 'ziko';
const {svg} = tags;
const KeyboardOff = (props) => 
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
    tags.path({"d":"M 20 4 A2 2 0 0 1 22 6"}),
	tags.path({"d":"M 22 6 L 22 16.41"}),
	tags.path({"d":"M 7 16 L 16 16"}),
	tags.path({"d":"M 9.69 4 L 20 4"}),
	tags.path({"d":"M14 8h.01"}),
	tags.path({"d":"M18 8h.01"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}),
	tags.path({"d":"M6 8h.01"}),
	tags.path({"d":"M8 12h.01"})
    )
export default KeyboardOff;
