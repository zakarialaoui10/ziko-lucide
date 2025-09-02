import {tags} from 'ziko';
const {svg} = tags;
const Option = (props) => 
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
    tags.path({"d":"M3 3h6l6 18h6"}),
	tags.path({"d":"M14 3h7"})
    )
export default Option;
