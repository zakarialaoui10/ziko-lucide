import {tags} from 'ziko';
const {svg} = tags;
const Maximize2 = (props) => 
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
    tags.path({"d":"M15 3h6v6"}),
	tags.path({"d":"m21 3-7 7"}),
	tags.path({"d":"m3 21 7-7"}),
	tags.path({"d":"M9 21H3v-6"})
    )
export default Maximize2;
