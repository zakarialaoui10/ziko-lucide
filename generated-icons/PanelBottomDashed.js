import {tags} from 'ziko';
const {svg} = tags;
const PanelBottomDashed = (props) => 
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
	tags.path({"d":"M14 15h1"}),
	tags.path({"d":"M19 15h2"}),
	tags.path({"d":"M3 15h2"}),
	tags.path({"d":"M9 15h1"})
    )
export default PanelBottomDashed;
