import {tags} from 'ziko';
const {svg} = tags;
const Torus = (props) => 
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
    tags.ellipse({"cx":"12","cy":"11","rx":"3","ry":"2"}),
	tags.ellipse({"cx":"12","cy":"12.5","rx":"10","ry":"8.5"})
    )
export default Torus;
