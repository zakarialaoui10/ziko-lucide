import {tags} from 'ziko';
const {svg} = tags;
const InspectionPanel = (props) => 
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
	tags.path({"d":"M7 7h.01"}),
	tags.path({"d":"M17 7h.01"}),
	tags.path({"d":"M7 17h.01"}),
	tags.path({"d":"M17 17h.01"})
    )
export default InspectionPanel;
