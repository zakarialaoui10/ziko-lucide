import {tags} from 'ziko';
const {svg} = tags;
const GripVertical = (props) => 
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
    tags.circle({"cx":"9","cy":"12","r":"1"}),
	tags.circle({"cx":"9","cy":"5","r":"1"}),
	tags.circle({"cx":"9","cy":"19","r":"1"}),
	tags.circle({"cx":"15","cy":"12","r":"1"}),
	tags.circle({"cx":"15","cy":"5","r":"1"}),
	tags.circle({"cx":"15","cy":"19","r":"1"})
    )
export default GripVertical;
