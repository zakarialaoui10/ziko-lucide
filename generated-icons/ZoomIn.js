import {tags} from 'ziko';
const {svg} = tags;
const ZoomIn = (props) => 
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
    tags.circle({"cx":"11","cy":"11","r":"8"}),
	tags.line({"x1":"21","x2":"16.65","y1":"21","y2":"16.65"}),
	tags.line({"x1":"11","x2":"11","y1":"8","y2":"14"}),
	tags.line({"x1":"8","x2":"14","y1":"11","y2":"11"})
    )
export default ZoomIn;
