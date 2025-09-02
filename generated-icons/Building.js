import {tags} from 'ziko';
const {svg} = tags;
const Building = (props) => 
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
    tags.path({"d":"M12 10h.01"}),
	tags.path({"d":"M12 14h.01"}),
	tags.path({"d":"M12 6h.01"}),
	tags.path({"d":"M16 10h.01"}),
	tags.path({"d":"M16 14h.01"}),
	tags.path({"d":"M16 6h.01"}),
	tags.path({"d":"M8 10h.01"}),
	tags.path({"d":"M8 14h.01"}),
	tags.path({"d":"M8 6h.01"}),
	tags.path({"d":"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"}),
	tags.rect({"x":"4","y":"2","width":"16","height":"20","rx":"2"})
    )
export default Building;
