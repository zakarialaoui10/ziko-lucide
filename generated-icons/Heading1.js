import {tags} from 'ziko';
const {svg} = tags;
const Heading1 = (props) => 
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
	tags.path({"d":"m17 12 3-2v8"})
    )
export default Heading1;
