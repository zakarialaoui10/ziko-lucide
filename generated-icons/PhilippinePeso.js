import {tags} from 'ziko';
const {svg} = tags;
const PhilippinePeso = (props) => 
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
    tags.path({"d":"M20 11H4"}),
	tags.path({"d":"M20 7H4"}),
	tags.path({"d":"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"})
    )
export default PhilippinePeso;
