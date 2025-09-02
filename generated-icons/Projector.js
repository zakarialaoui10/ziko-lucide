import {tags} from 'ziko';
const {svg} = tags;
const Projector = (props) => 
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
    tags.path({"d":"M5 7 3 5"}),
	tags.path({"d":"M9 6V3"}),
	tags.path({"d":"m13 7 2-2"}),
	tags.circle({"cx":"9","cy":"13","r":"3"}),
	tags.path({"d":"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}),
	tags.path({"d":"M16 16h2"})
    )
export default Projector;
