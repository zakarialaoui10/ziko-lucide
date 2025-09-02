import {tags} from 'ziko';
const {svg} = tags;
const AlignStartHorizontal = (props) => 
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
    tags.rect({"width":"6","height":"16","x":"4","y":"6","rx":"2"}),
	tags.rect({"width":"6","height":"9","x":"14","y":"6","rx":"2"}),
	tags.path({"d":"M22 2H2"})
    )
export default AlignStartHorizontal;
