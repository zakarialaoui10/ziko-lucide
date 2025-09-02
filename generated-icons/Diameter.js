import {tags} from 'ziko';
const {svg} = tags;
const Diameter = (props) => 
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
    tags.circle({"cx":"19","cy":"19","r":"2"}),
	tags.circle({"cx":"5","cy":"5","r":"2"}),
	tags.path({"d":"M6.48 3.66a10 10 0 0 1 13.86 13.86"}),
	tags.path({"d":"m6.41 6.41 11.18 11.18"}),
	tags.path({"d":"M3.66 6.48a10 10 0 0 0 13.86 13.86"})
    )
export default Diameter;
