import {tags} from 'ziko';
const {svg} = tags;
const Speaker = (props) => 
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
    tags.rect({"width":"16","height":"20","x":"4","y":"2","rx":"2"}),
	tags.path({"d":"M12 6h.01"}),
	tags.circle({"cx":"12","cy":"14","r":"4"}),
	tags.path({"d":"M12 14h.01"})
    )
export default Speaker;
