import {tags} from 'ziko';
const {svg} = tags;
const PanelLeftRightDashed = (props) => 
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
    tags.path({"d":"M16 10V9"}),
	tags.path({"d":"M16 15v-1"}),
	tags.path({"d":"M16 21v-2"}),
	tags.path({"d":"M16 5V3"}),
	tags.path({"d":"M8 10V9"}),
	tags.path({"d":"M8 15v-1"}),
	tags.path({"d":"M8 21v-2"}),
	tags.path({"d":"M8 5V3"}),
	tags.rect({"x":"3","y":"3","width":"18","height":"18","rx":"2"})
    )
export default PanelLeftRightDashed;
