import {tags} from 'ziko';
const {svg} = tags;
const FileDigit = (props) => 
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
    tags.path({"d":"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}),
	tags.path({"d":"M14 2v4a2 2 0 0 0 2 2h4"}),
	tags.rect({"width":"4","height":"6","x":"2","y":"12","rx":"2"}),
	tags.path({"d":"M10 12h2v6"}),
	tags.path({"d":"M10 18h4"})
    )
export default FileDigit;
