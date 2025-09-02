import {tags} from 'ziko';
const {svg} = tags;
const ScissorsLineDashed = (props) => 
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
    tags.path({"d":"M5.42 9.42 8 12"}),
	tags.circle({"cx":"4","cy":"8","r":"2"}),
	tags.path({"d":"m14 6-8.58 8.58"}),
	tags.circle({"cx":"4","cy":"16","r":"2"}),
	tags.path({"d":"M10.8 14.8 14 18"}),
	tags.path({"d":"M16 12h-2"}),
	tags.path({"d":"M22 12h-2"})
    )
export default ScissorsLineDashed;
