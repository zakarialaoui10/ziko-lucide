import {tags} from 'ziko';
const {svg} = tags;
const BellElectric = (props) => 
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
    tags.path({"d":"M18.518 17.347A7 7 0 0 1 14 19"}),
	tags.path({"d":"M18.8 4A11 11 0 0 1 20 9"}),
	tags.path({"d":"M9 9h.01"}),
	tags.circle({"cx":"20","cy":"16","r":"2"}),
	tags.circle({"cx":"9","cy":"9","r":"7"}),
	tags.rect({"x":"4","y":"16","width":"10","height":"6","rx":"2"})
    )
export default BellElectric;
