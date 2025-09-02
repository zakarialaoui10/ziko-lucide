import {tags} from 'ziko';
const {svg} = tags;
const ContactRound = (props) => 
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
    tags.path({"d":"M16 2v2"}),
	tags.path({"d":"M17.915 22a6 6 0 0 0-12 0"}),
	tags.path({"d":"M8 2v2"}),
	tags.circle({"cx":"12","cy":"12","r":"4"}),
	tags.rect({"x":"3","y":"4","width":"18","height":"18","rx":"2"})
    )
export default ContactRound;
