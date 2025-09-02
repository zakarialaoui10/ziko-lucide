import {tags} from 'ziko';
const {svg} = tags;
const Tent = (props) => 
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
    tags.path({"d":"M3.5 21 14 3"}),
	tags.path({"d":"M20.5 21 10 3"}),
	tags.path({"d":"M15.5 21 12 15l-3.5 6"}),
	tags.path({"d":"M2 21h20"})
    )
export default Tent;
