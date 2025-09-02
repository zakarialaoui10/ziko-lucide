import {tags} from 'ziko';
const {svg} = tags;
const ClipboardList = (props) => 
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
    tags.rect({"width":"8","height":"4","x":"8","y":"2","rx":"1","ry":"1"}),
	tags.path({"d":"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),
	tags.path({"d":"M12 11h4"}),
	tags.path({"d":"M12 16h4"}),
	tags.path({"d":"M8 11h.01"}),
	tags.path({"d":"M8 16h.01"})
    )
export default ClipboardList;
