import {tags} from 'ziko';
const {svg} = tags;
const Binary = (props) => 
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
    tags.rect({"x":"14","y":"14","width":"4","height":"6","rx":"2"}),
	tags.rect({"x":"6","y":"4","width":"4","height":"6","rx":"2"}),
	tags.path({"d":"M6 20h4"}),
	tags.path({"d":"M14 10h4"}),
	tags.path({"d":"M6 14h2v6"}),
	tags.path({"d":"M14 4h2v6"})
    )
export default Binary;
