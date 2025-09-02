import {tags} from 'ziko';
const {svg} = tags;
const IterationCw = (props) => 
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
    tags.path({"d":"M4 10a8 8 0 1 1 8 8H4"}),
	tags.path({"d":"m8 22-4-4 4-4"})
    )
export default IterationCw;
