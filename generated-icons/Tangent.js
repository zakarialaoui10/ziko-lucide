import {tags} from 'ziko';
const {svg} = tags;
const Tangent = (props) => 
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
    tags.circle({"cx":"17","cy":"4","r":"2"}),
	tags.path({"d":"M15.59 5.41 5.41 15.59"}),
	tags.circle({"cx":"4","cy":"17","r":"2"}),
	tags.path({"d":"M12 22s-4-9-1.5-11.5S22 12 22 12"})
    )
export default Tangent;
