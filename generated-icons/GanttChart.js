import {tags} from 'ziko';
const {svg} = tags;
const GanttChart = (props) => 
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
    tags.path({"d":"M8 6h10"}),
	tags.path({"d":"M6 12h9"}),
	tags.path({"d":"M11 18h7"})
    )
export default GanttChart;
