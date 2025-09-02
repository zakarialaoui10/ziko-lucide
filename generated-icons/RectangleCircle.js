import {tags} from 'ziko';
const {svg} = tags;
const RectangleCircle = (props) => 
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
    tags.path({"d":"M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"}),
	tags.circle({"cx":"14","cy":"12","r":"8"})
    )
export default RectangleCircle;
