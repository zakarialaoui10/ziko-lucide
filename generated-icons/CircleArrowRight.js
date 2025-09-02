import {tags} from 'ziko';
const {svg} = tags;
const CircleArrowRight = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.path({"d":"m12 16 4-4-4-4"}),
	tags.path({"d":"M8 12h8"})
    )
export default CircleArrowRight;
