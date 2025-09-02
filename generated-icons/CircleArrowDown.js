import {tags} from 'ziko';
const {svg} = tags;
const CircleArrowDown = (props) => 
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
	tags.path({"d":"M12 8v8"}),
	tags.path({"d":"m8 12 4 4 4-4"})
    )
export default CircleArrowDown;
