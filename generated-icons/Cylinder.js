import {tags} from 'ziko';
const {svg} = tags;
const Cylinder = (props) => 
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
    tags.ellipse({"cx":"12","cy":"5","rx":"9","ry":"3"}),
	tags.path({"d":"M3 5v14a9 3 0 0 0 18 0V5"})
    )
export default Cylinder;
