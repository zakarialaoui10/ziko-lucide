import {tags} from 'ziko';
const {svg} = tags;
const BriefcaseConveyorBelt = (props) => 
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
    tags.path({"d":"M10 20v2"}),
	tags.path({"d":"M14 20v2"}),
	tags.path({"d":"M18 20v2"}),
	tags.path({"d":"M21 20H3"}),
	tags.path({"d":"M6 20v2"}),
	tags.path({"d":"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}),
	tags.rect({"x":"4","y":"6","width":"16","height":"10","rx":"2"})
    )
export default BriefcaseConveyorBelt;
