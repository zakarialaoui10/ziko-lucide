import {tags} from 'ziko';
const {svg} = tags;
const GitPullRequestCreate = (props) => 
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
	tags.path({"d":"M13 6h3a2 2 0 0 1 2 2v3"}),
	tags.path({"d":"M18 15v6"}),
	tags.path({"d":"M21 18h-6"})
    )
export default GitPullRequestCreate;
