import {tags} from 'ziko';
const {svg} = tags;
const PcCase = (props) => 
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
    tags.rect({"width":"14","height":"20","x":"5","y":"2","rx":"2"}),
	tags.path({"d":"M15 14h.01"}),
	tags.path({"d":"M9 6h6"}),
	tags.path({"d":"M9 10h6"})
    )
export default PcCase;
