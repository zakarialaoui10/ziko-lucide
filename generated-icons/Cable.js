import {tags} from 'ziko';
const {svg} = tags;
const Cable = (props) => 
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
    tags.path({"d":"M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"}),
	tags.path({"d":"M17 21v-2"}),
	tags.path({"d":"M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"}),
	tags.path({"d":"M21 21v-2"}),
	tags.path({"d":"M3 5V3"}),
	tags.path({"d":"M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"}),
	tags.path({"d":"M7 5V3"})
    )
export default Cable;
