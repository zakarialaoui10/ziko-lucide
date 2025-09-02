import {tags} from 'ziko';
const {svg} = tags;
const StretchVertical = (props) => 
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
    tags.rect({"width":"6","height":"20","x":"4","y":"2","rx":"2"}),
	tags.rect({"width":"6","height":"20","x":"14","y":"2","rx":"2"})
    )
export default StretchVertical;
