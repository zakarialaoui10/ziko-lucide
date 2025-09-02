import {tags} from 'ziko';
const {svg} = tags;
const RollerCoaster = (props) => 
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
    tags.path({"d":"M6 19V5"}),
	tags.path({"d":"M10 19V6.8"}),
	tags.path({"d":"M14 19v-7.8"}),
	tags.path({"d":"M18 5v4"}),
	tags.path({"d":"M18 19v-6"}),
	tags.path({"d":"M22 19V9"}),
	tags.path({"d":"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"})
    )
export default RollerCoaster;
