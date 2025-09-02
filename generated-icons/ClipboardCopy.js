import {tags} from 'ziko';
const {svg} = tags;
const ClipboardCopy = (props) => 
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
	tags.path({"d":"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}),
	tags.path({"d":"M16 4h2a2 2 0 0 1 2 2v4"}),
	tags.path({"d":"M21 14H11"}),
	tags.path({"d":"m15 10-4 4 4 4"})
    )
export default ClipboardCopy;
