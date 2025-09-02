import {tags} from 'ziko';
const {svg} = tags;
const GitPullRequestDraft = (props) => 
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
	tags.path({"d":"M18 6V5"}),
	tags.path({"d":"M18 11v-1"}),
	tags.line({"x1":"6","x2":"6","y1":"9","y2":"21"})
    )
export default GitPullRequestDraft;
