import {tags} from 'ziko';
const {svg} = tags;
const GitPullRequestClosed = (props) => 
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
    tags.circle({"cx":"6","cy":"6","r":"3"}),
	tags.path({"d":"M6 9v12"}),
	tags.path({"d":"m21 3-6 6"}),
	tags.path({"d":"m21 9-6-6"}),
	tags.path({"d":"M18 11.5V15"}),
	tags.circle({"cx":"18","cy":"18","r":"3"})
    )
export default GitPullRequestClosed;
