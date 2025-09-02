import {tags} from 'ziko';
const {svg} = tags;
const Vibrate = (props) => 
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
    tags.path({"d":"m2 8 2 2-2 2 2 2-2 2"}),
	tags.path({"d":"m22 8-2 2 2 2-2 2 2 2"}),
	tags.rect({"width":"8","height":"14","x":"8","y":"5","rx":"1"})
    )
export default Vibrate;
