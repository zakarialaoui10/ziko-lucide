import {tags} from 'ziko';
const {svg} = tags;
const LocateFixed = (props) => 
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
    tags.line({"x1":"2","x2":"5","y1":"12","y2":"12"}),
	tags.line({"x1":"19","x2":"22","y1":"12","y2":"12"}),
	tags.line({"x1":"12","x2":"12","y1":"2","y2":"5"}),
	tags.line({"x1":"12","x2":"12","y1":"19","y2":"22"}),
	tags.circle({"cx":"12","cy":"12","r":"7"}),
	tags.circle({"cx":"12","cy":"12","r":"3"})
    )
export default LocateFixed;
