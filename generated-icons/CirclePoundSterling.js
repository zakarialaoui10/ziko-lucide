import {tags} from 'ziko';
const {svg} = tags;
const CirclePoundSterling = (props) => 
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
    tags.path({"d":"M10 16V9.5a1 1 0 0 1 5 0"}),
	tags.path({"d":"M8 12h4"}),
	tags.path({"d":"M8 16h7"}),
	tags.circle({"cx":"12","cy":"12","r":"10"})
    )
export default CirclePoundSterling;
