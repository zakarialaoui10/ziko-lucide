import {tags} from 'ziko';
const {svg} = tags;
const AlignEndHorizontal = (props) => 
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
    tags.rect({"width":"6","height":"16","x":"4","y":"2","rx":"2"}),
	tags.rect({"width":"6","height":"9","x":"14","y":"9","rx":"2"}),
	tags.path({"d":"M22 22H2"})
    )
export default AlignEndHorizontal;
