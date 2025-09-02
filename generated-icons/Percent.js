import {tags} from 'ziko';
const {svg} = tags;
const Percent = (props) => 
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
    tags.line({"x1":"19","x2":"5","y1":"5","y2":"19"}),
	tags.circle({"cx":"6.5","cy":"6.5","r":"2.5"}),
	tags.circle({"cx":"17.5","cy":"17.5","r":"2.5"})
    )
export default Percent;
