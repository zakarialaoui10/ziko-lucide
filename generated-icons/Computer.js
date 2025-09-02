import {tags} from 'ziko';
const {svg} = tags;
const Computer = (props) => 
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
    tags.rect({"width":"14","height":"8","x":"5","y":"2","rx":"2"}),
	tags.rect({"width":"20","height":"8","x":"2","y":"14","rx":"2"}),
	tags.path({"d":"M6 18h2"}),
	tags.path({"d":"M12 18h6"})
    )
export default Computer;
