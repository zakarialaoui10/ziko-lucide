import {tags} from 'ziko';
const {svg} = tags;
const ClipboardPaste = (props) => 
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
    tags.path({"d":"M11 14h10"}),
	tags.path({"d":"M16 4h2a2 2 0 0 1 2 2v1.344"}),
	tags.path({"d":"m17 18 4-4-4-4"}),
	tags.path({"d":"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"}),
	tags.rect({"x":"8","y":"2","width":"8","height":"4","rx":"1"})
    )
export default ClipboardPaste;
