import {tags} from 'ziko';
const {svg} = tags;
const CircleOff = (props) => 
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
    tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M8.35 2.69A10 10 0 0 1 21.3 15.65"}),
	tags.path({"d":"M19.08 19.08A10 10 0 1 1 4.92 4.92"})
    )
export default CircleOff;
