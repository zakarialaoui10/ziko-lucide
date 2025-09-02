import {tags} from 'ziko';
const {svg} = tags;
const Glasses = (props) => 
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
    tags.circle({"cx":"6","cy":"15","r":"4"}),
	tags.circle({"cx":"18","cy":"15","r":"4"}),
	tags.path({"d":"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}),
	tags.path({"d":"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}),
	tags.path({"d":"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"})
    )
export default Glasses;
