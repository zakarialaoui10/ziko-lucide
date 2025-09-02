import {tags} from 'ziko';
const {svg} = tags;
const GanttChartSquare = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2"}),
	tags.path({"d":"M9 8h7"}),
	tags.path({"d":"M8 12h6"}),
	tags.path({"d":"M11 16h5"})
    )
export default GanttChartSquare;
