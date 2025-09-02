import {tags} from 'ziko';
const {svg} = tags;
const Ungroup = (props) => 
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
    tags.rect({"width":"8","height":"6","x":"5","y":"4","rx":"1"}),
	tags.rect({"width":"8","height":"6","x":"11","y":"14","rx":"1"})
    )
export default Ungroup;
