import {tags} from 'ziko';
const {svg} = tags;
const DivideCircle = (props) => 
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
    tags.line({"x1":"8","x2":"16","y1":"12","y2":"12"}),
	tags.line({"x1":"12","x2":"12","y1":"16","y2":"16"}),
	tags.line({"x1":"12","x2":"12","y1":"8","y2":"8"}),
	tags.circle({"cx":"12","cy":"12","r":"10"})
    )
export default DivideCircle;
