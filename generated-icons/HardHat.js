import {tags} from 'ziko';
const {svg} = tags;
const HardHat = (props) => 
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
    tags.path({"d":"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}),
	tags.path({"d":"M14 6a6 6 0 0 1 6 6v3"}),
	tags.path({"d":"M4 15v-3a6 6 0 0 1 6-6"}),
	tags.rect({"x":"2","y":"15","width":"20","height":"4","rx":"1"})
    )
export default HardHat;
