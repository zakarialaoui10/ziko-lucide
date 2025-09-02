import {tags} from 'ziko';
const {svg} = tags;
const Heater = (props) => 
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
    tags.path({"d":"M11 8c2-3-2-3 0-6"}),
	tags.path({"d":"M15.5 8c2-3-2-3 0-6"}),
	tags.path({"d":"M6 10h.01"}),
	tags.path({"d":"M6 14h.01"}),
	tags.path({"d":"M10 16v-4"}),
	tags.path({"d":"M14 16v-4"}),
	tags.path({"d":"M18 16v-4"}),
	tags.path({"d":"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}),
	tags.path({"d":"M5 20v2"}),
	tags.path({"d":"M19 20v2"})
    )
export default Heater;
