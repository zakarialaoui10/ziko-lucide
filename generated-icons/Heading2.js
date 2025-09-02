import {tags} from 'ziko';
const {svg} = tags;
const Heading2 = (props) => 
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
	tags.path({"d":"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"})
    )
export default Heading2;
