import {tags} from 'ziko';
const {svg} = tags;
const FlaskConicalOff = (props) => 
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
    tags.path({"d":"M10 2v2.343"}),
	tags.path({"d":"M14 2v6.343"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"}),
	tags.path({"d":"M6.453 15H15"}),
	tags.path({"d":"M8.5 2h7"})
    )
export default FlaskConicalOff;
