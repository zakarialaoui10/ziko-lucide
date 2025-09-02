import {tags} from 'ziko';
const {svg} = tags;
const CopyMinus = (props) => 
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
    tags.line({"x1":"12","x2":"18","y1":"15","y2":"15"}),
	tags.rect({"width":"14","height":"14","x":"8","y":"8","rx":"2","ry":"2"}),
	tags.path({"d":"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})
    )
export default CopyMinus;
