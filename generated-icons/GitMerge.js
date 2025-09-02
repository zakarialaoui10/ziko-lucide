import {tags} from 'ziko';
const {svg} = tags;
const GitMerge = (props) => 
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
	tags.path({"d":"M6 21V9a9 9 0 0 0 9 9"})
    )
export default GitMerge;
