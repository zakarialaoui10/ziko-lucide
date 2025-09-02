import {tags} from 'ziko';
const {svg} = tags;
const SendToBack = (props) => 
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
    tags.rect({"x":"14","y":"14","width":"8","height":"8","rx":"2"}),
	tags.rect({"x":"2","y":"2","width":"8","height":"8","rx":"2"}),
	tags.path({"d":"M7 14v1a2 2 0 0 0 2 2h1"}),
	tags.path({"d":"M14 7h1a2 2 0 0 1 2 2v1"})
    )
export default SendToBack;
