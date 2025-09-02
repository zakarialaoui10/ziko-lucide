import {tags} from 'ziko';
const {svg} = tags;
const CircleStop = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.rect({"x":"9","y":"9","width":"6","height":"6","rx":"1"})
    )
export default CircleStop;
