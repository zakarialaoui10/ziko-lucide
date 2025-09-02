import {tags} from 'ziko';
const {svg} = tags;
const Voicemail = (props) => 
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
    tags.circle({"cx":"6","cy":"12","r":"4"}),
	tags.circle({"cx":"18","cy":"12","r":"4"}),
	tags.line({"x1":"6","x2":"18","y1":"16","y2":"16"})
    )
export default Voicemail;
