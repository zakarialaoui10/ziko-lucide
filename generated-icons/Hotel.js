import {tags} from 'ziko';
const {svg} = tags;
const Hotel = (props) => 
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
    tags.path({"d":"M10 22v-6.57"}),
	tags.path({"d":"M12 11h.01"}),
	tags.path({"d":"M12 7h.01"}),
	tags.path({"d":"M14 15.43V22"}),
	tags.path({"d":"M15 16a5 5 0 0 0-6 0"}),
	tags.path({"d":"M16 11h.01"}),
	tags.path({"d":"M16 7h.01"}),
	tags.path({"d":"M8 11h.01"}),
	tags.path({"d":"M8 7h.01"}),
	tags.rect({"x":"4","y":"2","width":"16","height":"20","rx":"2"})
    )
export default Hotel;
