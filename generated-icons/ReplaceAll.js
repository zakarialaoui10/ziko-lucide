import {tags} from 'ziko';
const {svg} = tags;
const ReplaceAll = (props) => 
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
    tags.path({"d":"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}),
	tags.path({"d":"M14 4a2 2 0 0 1 2-2"}),
	tags.path({"d":"M16 10a2 2 0 0 1-2-2"}),
	tags.path({"d":"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}),
	tags.path({"d":"M20 2a2 2 0 0 1 2 2"}),
	tags.path({"d":"M22 8a2 2 0 0 1-2 2"}),
	tags.path({"d":"m3 7 3 3 3-3"}),
	tags.path({"d":"M6 10V5a 3 3 0 0 1 3-3h1"}),
	tags.rect({"x":"2","y":"14","width":"8","height":"8","rx":"2"})
    )
export default ReplaceAll;
