import {tags} from 'ziko';
const {svg} = tags;
const SquareDivide = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}),
	tags.line({"x1":"8","x2":"16","y1":"12","y2":"12"}),
	tags.line({"x1":"12","x2":"12","y1":"16","y2":"16"}),
	tags.line({"x1":"12","x2":"12","y1":"8","y2":"8"})
    )
export default SquareDivide;
