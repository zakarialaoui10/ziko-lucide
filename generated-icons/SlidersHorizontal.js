import {tags} from 'ziko';
const {svg} = tags;
const SlidersHorizontal = (props) => 
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
    tags.line({"x1":"21","x2":"14","y1":"4","y2":"4"}),
	tags.line({"x1":"10","x2":"3","y1":"4","y2":"4"}),
	tags.line({"x1":"21","x2":"12","y1":"12","y2":"12"}),
	tags.line({"x1":"8","x2":"3","y1":"12","y2":"12"}),
	tags.line({"x1":"21","x2":"16","y1":"20","y2":"20"}),
	tags.line({"x1":"12","x2":"3","y1":"20","y2":"20"}),
	tags.line({"x1":"14","x2":"14","y1":"2","y2":"6"}),
	tags.line({"x1":"8","x2":"8","y1":"10","y2":"14"}),
	tags.line({"x1":"16","x2":"16","y1":"18","y2":"22"})
    )
export default SlidersHorizontal;
