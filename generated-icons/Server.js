import {tags} from 'ziko';
const {svg} = tags;
const Server = (props) => 
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
    tags.rect({"width":"20","height":"8","x":"2","y":"2","rx":"2","ry":"2"}),
	tags.rect({"width":"20","height":"8","x":"2","y":"14","rx":"2","ry":"2"}),
	tags.line({"x1":"6","x2":"6.01","y1":"6","y2":"6"}),
	tags.line({"x1":"6","x2":"6.01","y1":"18","y2":"18"})
    )
export default Server;
