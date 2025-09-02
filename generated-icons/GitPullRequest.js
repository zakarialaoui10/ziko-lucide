import {tags} from 'ziko';
const {svg} = tags;
const GitPullRequest = (props) => 
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
    tags.circle({"cx":"18","cy":"18","r":"3"}),
	tags.circle({"cx":"6","cy":"6","r":"3"}),
	tags.path({"d":"M13 6h3a2 2 0 0 1 2 2v7"}),
	tags.line({"x1":"6","x2":"6","y1":"9","y2":"21"})
    )
export default GitPullRequest;
