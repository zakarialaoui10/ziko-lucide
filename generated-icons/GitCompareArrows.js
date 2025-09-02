import {tags} from 'ziko';
const {svg} = tags;
const GitCompareArrows = (props) => 
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
	tags.path({"d":"M12 6h5a2 2 0 0 1 2 2v7"}),
	tags.path({"d":"m15 9-3-3 3-3"}),
	tags.circle({"cx":"19","cy":"18","r":"3"}),
	tags.path({"d":"M12 18H7a2 2 0 0 1-2-2V9"}),
	tags.path({"d":"m9 15 3 3-3 3"})
    )
export default GitCompareArrows;
