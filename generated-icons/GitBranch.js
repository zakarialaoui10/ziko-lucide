import {tags} from 'ziko';
const {svg} = tags;
const GitBranch = (props) => 
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
    tags.line({"x1":"6","x2":"6","y1":"3","y2":"15"}),
	tags.circle({"cx":"18","cy":"6","r":"3"}),
	tags.circle({"cx":"6","cy":"18","r":"3"}),
	tags.path({"d":"M18 9a9 9 0 0 1-9 9"})
    )
export default GitBranch;
