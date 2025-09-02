import {tags} from 'ziko';
const {svg} = tags;
const IterationCcw = (props) => 
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
    tags.path({"d":"m16 14 4 4-4 4"}),
	tags.path({"d":"M20 10a8 8 0 1 0-8 8h8"})
    )
export default IterationCcw;
