import {tags} from 'ziko';
const {svg} = tags;
const Bandage = (props) => 
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
    tags.path({"d":"M10 10.01h.01"}),
	tags.path({"d":"M10 14.01h.01"}),
	tags.path({"d":"M14 10.01h.01"}),
	tags.path({"d":"M14 14.01h.01"}),
	tags.path({"d":"M18 6v11.5"}),
	tags.path({"d":"M6 6v12"}),
	tags.rect({"x":"2","y":"6","width":"20","height":"12","rx":"2"})
    )
export default Bandage;
