import {tags} from 'ziko';
const {svg} = tags;
const ChartCandlestick = (props) => 
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
    tags.path({"d":"M9 5v4"}),
	tags.rect({"width":"4","height":"6","x":"7","y":"9","rx":"1"}),
	tags.path({"d":"M9 15v2"}),
	tags.path({"d":"M17 3v2"}),
	tags.rect({"width":"4","height":"8","x":"15","y":"5","rx":"1"}),
	tags.path({"d":"M17 13v3"}),
	tags.path({"d":"M3 3v16a2 2 0 0 0 2 2h16"})
    )
export default ChartCandlestick;
