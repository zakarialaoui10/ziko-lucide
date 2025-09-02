import {tags} from 'ziko';
const {svg} = tags;
const Contact = (props) => 
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
	tags.path({"d":"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}),
	tags.path({"d":"M8 2v2"}),
	tags.circle({"cx":"12","cy":"11","r":"3"}),
	tags.rect({"x":"3","y":"4","width":"18","height":"18","rx":"2"})
    )
export default Contact;
