import {tags} from 'ziko';
const {svg} = tags;
const Accessibility = (props) => 
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
    tags.circle({"cx":"16","cy":"4","r":"1"}),
	tags.path({"d":"m18 19 1-7-6 1"}),
	tags.path({"d":"m5 8 3-3 5.5 3-2.36 3.5"}),
	tags.path({"d":"M4.24 14.5a5 5 0 0 0 6.88 6"}),
	tags.path({"d":"M13.76 17.5a5 5 0 0 0-6.88-6"})
    )
export default Accessibility;
