import {tags} from 'ziko';
const {svg} = tags;
const Cone = (props) => 
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
    tags.path({"d":"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}),
	tags.ellipse({"cx":"12","cy":"19","rx":"9","ry":"3"})
    )
export default Cone;
