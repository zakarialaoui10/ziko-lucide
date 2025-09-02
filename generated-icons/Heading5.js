import {tags} from 'ziko';
const {svg} = tags;
const Heading5 = (props) => 
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
	tags.path({"d":"M17 13v-3h4"}),
	tags.path({"d":"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"})
    )
export default Heading5;
