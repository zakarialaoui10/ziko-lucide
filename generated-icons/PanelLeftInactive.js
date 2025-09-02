import {tags} from 'ziko';
const {svg} = tags;
const PanelLeftInactive = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2"}),
	tags.path({"d":"M9 14v1"}),
	tags.path({"d":"M9 19v2"}),
	tags.path({"d":"M9 3v2"}),
	tags.path({"d":"M9 9v1"})
    )
export default PanelLeftInactive;
