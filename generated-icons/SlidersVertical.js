import {tags} from 'ziko';
const {svg} = tags;
const SlidersVertical = (props) => 
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
    tags.line({"x1":"4","x2":"4","y1":"21","y2":"14"}),
	tags.line({"x1":"4","x2":"4","y1":"10","y2":"3"}),
	tags.line({"x1":"12","x2":"12","y1":"21","y2":"12"}),
	tags.line({"x1":"12","x2":"12","y1":"8","y2":"3"}),
	tags.line({"x1":"20","x2":"20","y1":"21","y2":"16"}),
	tags.line({"x1":"20","x2":"20","y1":"12","y2":"3"}),
	tags.line({"x1":"2","x2":"6","y1":"14","y2":"14"}),
	tags.line({"x1":"10","x2":"14","y1":"8","y2":"8"}),
	tags.line({"x1":"18","x2":"22","y1":"16","y2":"16"})
    )
export default SlidersVertical;
