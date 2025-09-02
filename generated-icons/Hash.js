import {tags} from 'ziko';
const {svg} = tags;
const Hash = (props) => 
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
    tags.line({"x1":"4","x2":"20","y1":"9","y2":"9"}),
	tags.line({"x1":"4","x2":"20","y1":"15","y2":"15"}),
	tags.line({"x1":"10","x2":"8","y1":"3","y2":"21"}),
	tags.line({"x1":"16","x2":"14","y1":"3","y2":"21"})
    )
export default Hash;
