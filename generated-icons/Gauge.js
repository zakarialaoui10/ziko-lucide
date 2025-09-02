import {tags} from 'ziko';
const {svg} = tags;
const Gauge = (props) => 
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
    tags.path({"d":"m12 14 4-4"}),
	tags.path({"d":"M3.34 19a10 10 0 1 1 17.32 0"})
    )
export default Gauge;
