import {tags} from 'ziko';
const {svg} = tags;
const CheckLine = (props) => 
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
    tags.path({"d":"M20 4L9 15"}),
	tags.path({"d":"M21 19L3 19"}),
	tags.path({"d":"M9 15L4 10"})
    )
export default CheckLine;
