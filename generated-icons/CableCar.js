import {tags} from 'ziko';
const {svg} = tags;
const CableCar = (props) => 
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
    tags.path({"d":"M10 3h.01"}),
	tags.path({"d":"M14 2h.01"}),
	tags.path({"d":"m2 9 20-5"}),
	tags.path({"d":"M12 12V6.5"}),
	tags.rect({"width":"16","height":"10","x":"4","y":"12","rx":"3"}),
	tags.path({"d":"M9 12v5"}),
	tags.path({"d":"M15 12v5"}),
	tags.path({"d":"M4 17h16"})
    )
export default CableCar;
