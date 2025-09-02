import {tags} from 'ziko';
const {svg} = tags;
const Bath = (props) => 
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
    tags.path({"d":"M10 4 8 6"}),
	tags.path({"d":"M17 19v2"}),
	tags.path({"d":"M2 12h20"}),
	tags.path({"d":"M7 19v2"}),
	tags.path({"d":"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"})
    )
export default Bath;
