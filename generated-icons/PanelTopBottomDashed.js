import {tags} from 'ziko';
const {svg} = tags;
const PanelTopBottomDashed = (props) => 
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
    tags.path({"d":"M14 16h1"}),
	tags.path({"d":"M14 8h1"}),
	tags.path({"d":"M19 16h2"}),
	tags.path({"d":"M19 8h2"}),
	tags.path({"d":"M3 16h2"}),
	tags.path({"d":"M3 8h2"}),
	tags.path({"d":"M9 16h1"}),
	tags.path({"d":"M9 8h1"}),
	tags.rect({"x":"3","y":"3","width":"18","height":"18","rx":"2"})
    )
export default PanelTopBottomDashed;
