import {tags} from 'ziko';
const {svg} = tags;
const ChartNoAxesCombined = (props) => 
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
    tags.path({"d":"M12 16v5"}),
	tags.path({"d":"M16 14v7"}),
	tags.path({"d":"M20 10v11"}),
	tags.path({"d":"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}),
	tags.path({"d":"M4 18v3"}),
	tags.path({"d":"M8 14v7"})
    )
export default ChartNoAxesCombined;
