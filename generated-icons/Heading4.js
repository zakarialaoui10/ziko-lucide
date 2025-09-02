import {tags} from 'ziko';
const {svg} = tags;
const Heading4 = (props) => 
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
    tags.path({"d":"M12 18V6"}),
	tags.path({"d":"M17 10v3a1 1 0 0 0 1 1h3"}),
	tags.path({"d":"M21 10v8"}),
	tags.path({"d":"M4 12h8"}),
	tags.path({"d":"M4 18V6"})
    )
export default Heading4;
