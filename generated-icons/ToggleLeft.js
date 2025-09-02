import {tags} from 'ziko';
const {svg} = tags;
const ToggleLeft = (props) => 
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
    tags.circle({"cx":"9","cy":"12","r":"3"}),
	tags.rect({"width":"20","height":"14","x":"2","y":"5","rx":"7"})
    )
export default ToggleLeft;
