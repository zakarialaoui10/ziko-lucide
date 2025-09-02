import {tags} from 'ziko';
const {svg} = tags;
const Radius = (props) => 
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
    tags.path({"d":"M20.34 17.52a10 10 0 1 0-2.82 2.82"}),
	tags.circle({"cx":"19","cy":"19","r":"2"}),
	tags.path({"d":"m13.41 13.41 4.18 4.18"}),
	tags.circle({"cx":"12","cy":"12","r":"2"})
    )
export default Radius;
