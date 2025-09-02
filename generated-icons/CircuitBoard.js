import {tags} from 'ziko';
const {svg} = tags;
const CircuitBoard = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2"}),
	tags.path({"d":"M11 9h4a2 2 0 0 0 2-2V3"}),
	tags.circle({"cx":"9","cy":"9","r":"2"}),
	tags.path({"d":"M7 21v-4a2 2 0 0 1 2-2h4"}),
	tags.circle({"cx":"15","cy":"15","r":"2"})
    )
export default CircuitBoard;
