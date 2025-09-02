import {tags} from 'ziko';
const {svg} = tags;
const Codepen = (props) => 
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
    tags.polygon({"points":"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}),
	tags.line({"x1":"12","x2":"12","y1":"22","y2":"15.5"}),
	tags.polyline({"points":"22 8.5 12 15.5 2 8.5"}),
	tags.polyline({"points":"2 15.5 12 8.5 22 15.5"}),
	tags.line({"x1":"12","x2":"12","y1":"2","y2":"8.5"})
    )
export default Codepen;
