import {tags} from 'ziko';
const {svg} = tags;
const Sheet = (props) => 
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
	tags.line({"x1":"3","x2":"21","y1":"9","y2":"9"}),
	tags.line({"x1":"3","x2":"21","y1":"15","y2":"15"}),
	tags.line({"x1":"9","x2":"9","y1":"9","y2":"21"}),
	tags.line({"x1":"15","x2":"15","y1":"9","y2":"21"})
    )
export default Sheet;
