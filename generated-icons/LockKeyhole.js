import {tags} from 'ziko';
const {svg} = tags;
const LockKeyhole = (props) => 
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
    tags.circle({"cx":"12","cy":"16","r":"1"}),
	tags.rect({"x":"3","y":"10","width":"18","height":"12","rx":"2"}),
	tags.path({"d":"M7 10V7a5 5 0 0 1 10 0v3"})
    )
export default LockKeyhole;
