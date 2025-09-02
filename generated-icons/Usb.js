import {tags} from 'ziko';
const {svg} = tags;
const Usb = (props) => 
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
    tags.circle({"cx":"10","cy":"7","r":"1"}),
	tags.circle({"cx":"4","cy":"20","r":"1"}),
	tags.path({"d":"M4.7 19.3 19 5"}),
	tags.path({"d":"m21 3-3 1 2 2Z"}),
	tags.path({"d":"M9.26 7.68 5 12l2 5"}),
	tags.path({"d":"m10 14 5 2 3.5-3.5"}),
	tags.path({"d":"m18 12 1-1 1 1-1 1Z"})
    )
export default Usb;
