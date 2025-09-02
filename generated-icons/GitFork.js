import {tags} from 'ziko';
const {svg} = tags;
const GitFork = (props) => 
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
    tags.circle({"cx":"12","cy":"18","r":"3"}),
	tags.circle({"cx":"6","cy":"6","r":"3"}),
	tags.circle({"cx":"18","cy":"6","r":"3"}),
	tags.path({"d":"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}),
	tags.path({"d":"M12 12v3"})
    )
export default GitFork;
