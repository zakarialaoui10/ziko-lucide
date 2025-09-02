import {tags} from 'ziko';
const {svg} = tags;
const Monitor = (props) => 
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
    tags.rect({"width":"20","height":"14","x":"2","y":"3","rx":"2"}),
	tags.line({"x1":"8","x2":"16","y1":"21","y2":"21"}),
	tags.line({"x1":"12","x2":"12","y1":"17","y2":"21"})
    )
export default Monitor;
