import {tags} from 'ziko';
const {svg} = tags;
const GitGraph = (props) => 
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
    tags.circle({"cx":"5","cy":"6","r":"3"}),
	tags.path({"d":"M5 9v6"}),
	tags.circle({"cx":"5","cy":"18","r":"3"}),
	tags.path({"d":"M12 3v18"}),
	tags.circle({"cx":"19","cy":"6","r":"3"}),
	tags.path({"d":"M16 15.7A9 9 0 0 0 19 9"})
    )
export default GitGraph;
