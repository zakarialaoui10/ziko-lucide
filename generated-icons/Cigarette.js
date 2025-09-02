import {tags} from 'ziko';
const {svg} = tags;
const Cigarette = (props) => 
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
    tags.path({"d":"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}),
	tags.path({"d":"M18 8c0-2.5-2-2.5-2-5"}),
	tags.path({"d":"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}),
	tags.path({"d":"M22 8c0-2.5-2-2.5-2-5"}),
	tags.path({"d":"M7 12v4"})
    )
export default Cigarette;
