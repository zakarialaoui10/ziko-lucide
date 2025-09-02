import {tags} from 'ziko';
const {svg} = tags;
const Minimize2 = (props) => 
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
    tags.path({"d":"m14 10 7-7"}),
	tags.path({"d":"M20 10h-6V4"}),
	tags.path({"d":"m3 21 7-7"}),
	tags.path({"d":"M4 14h6v6"})
    )
export default Minimize2;
