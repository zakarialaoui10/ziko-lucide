import {tags} from 'ziko';
const {svg} = tags;
const ClosedCaption = (props) => 
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
    tags.path({"d":"M10 9.17a3 3 0 1 0 0 5.66"}),
	tags.path({"d":"M17 9.17a3 3 0 1 0 0 5.66"}),
	tags.rect({"x":"2","y":"5","width":"20","height":"14","rx":"2"})
    )
export default ClosedCaption;
