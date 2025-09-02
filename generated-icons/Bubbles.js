import {tags} from 'ziko';
const {svg} = tags;
const Bubbles = (props) => 
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
    tags.path({"d":"M7.2 14.8a2 2 0 0 1 2 2"}),
	tags.circle({"cx":"18.5","cy":"8.5","r":"3.5"}),
	tags.circle({"cx":"7.5","cy":"16.5","r":"5.5"}),
	tags.circle({"cx":"7.5","cy":"4.5","r":"2.5"})
    )
export default Bubbles;
