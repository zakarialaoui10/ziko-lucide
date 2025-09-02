import {tags} from 'ziko';
const {svg} = tags;
const ChartBarDecreasing = (props) => 
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
    tags.path({"d":"M3 3v16a2 2 0 0 0 2 2h16"}),
	tags.path({"d":"M7 11h8"}),
	tags.path({"d":"M7 16h3"}),
	tags.path({"d":"M7 6h12"})
    )
export default ChartBarDecreasing;
