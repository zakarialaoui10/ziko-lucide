import {tags} from 'ziko';
const {svg} = tags;
const Microwave = (props) => 
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
    tags.rect({"width":"20","height":"15","x":"2","y":"4","rx":"2"}),
	tags.rect({"width":"8","height":"7","x":"6","y":"8","rx":"1"}),
	tags.path({"d":"M18 8v7"}),
	tags.path({"d":"M6 19v2"}),
	tags.path({"d":"M18 19v2"})
    )
export default Microwave;
