import {tags} from 'ziko';
const {svg} = tags;
const Wand = (props) => 
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
    tags.path({"d":"M15 4V2"}),
	tags.path({"d":"M15 16v-2"}),
	tags.path({"d":"M8 9h2"}),
	tags.path({"d":"M20 9h2"}),
	tags.path({"d":"M17.8 11.8 19 13"}),
	tags.path({"d":"M15 9h.01"}),
	tags.path({"d":"M17.8 6.2 19 5"}),
	tags.path({"d":"m3 21 9-9"}),
	tags.path({"d":"M12.2 6.2 11 5"})
    )
export default Wand;
