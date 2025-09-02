import {tags} from 'ziko';
const {svg} = tags;
const EqualApproximately = (props) => 
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
    tags.path({"d":"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}),
	tags.path({"d":"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"})
    )
export default EqualApproximately;
