import {tags} from 'ziko';
const {svg} = tags;
const Pause = (props) => 
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
    tags.rect({"x":"14","y":"3","width":"5","height":"18","rx":"1"}),
	tags.rect({"x":"5","y":"3","width":"5","height":"18","rx":"1"})
    )
export default Pause;
