import {tags} from 'ziko';
const {svg} = tags;
const AlignEndVertical = (props) => 
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
    tags.rect({"width":"16","height":"6","x":"2","y":"4","rx":"2"}),
	tags.rect({"width":"9","height":"6","x":"9","y":"14","rx":"2"}),
	tags.path({"d":"M22 22V2"})
    )
export default AlignEndVertical;
