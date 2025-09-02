import {tags} from 'ziko';
const {svg} = tags;
const CircleArrowOutDownLeft = (props) => 
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
    tags.path({"d":"M2 12a10 10 0 1 1 10 10"}),
	tags.path({"d":"m2 22 10-10"}),
	tags.path({"d":"M8 22H2v-6"})
    )
export default CircleArrowOutDownLeft;
