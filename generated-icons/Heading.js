import {tags} from 'ziko';
const {svg} = tags;
const Heading = (props) => 
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
    tags.path({"d":"M6 12h12"}),
	tags.path({"d":"M6 20V4"}),
	tags.path({"d":"M18 20V4"})
    )
export default Heading;
