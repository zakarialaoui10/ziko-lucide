import {tags} from 'ziko';
const {svg} = tags;
const CircleArrowOutDownRight = (props) => 
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
    tags.path({"d":"M12 22a10 10 0 1 1 10-10"}),
	tags.path({"d":"M22 22 12 12"}),
	tags.path({"d":"M22 16v6h-6"})
    )
export default CircleArrowOutDownRight;
