import {tags} from 'ziko';
const {svg} = tags;
const Spline = (props) => 
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
    tags.circle({"cx":"19","cy":"5","r":"2"}),
	tags.circle({"cx":"5","cy":"19","r":"2"}),
	tags.path({"d":"M5 17A12 12 0 0 1 17 5"})
    )
export default Spline;
