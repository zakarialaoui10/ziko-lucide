import {tags} from 'ziko';
const {svg} = tags;
const Heading6 = (props) => 
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
    tags.path({"d":"M4 12h8"}),
	tags.path({"d":"M4 18V6"}),
	tags.path({"d":"M12 18V6"}),
	tags.circle({"cx":"19","cy":"16","r":"2"}),
	tags.path({"d":"M20 10c-2 2-3 3.5-3 6"})
    )
export default Heading6;
