import {tags} from 'ziko';
const {svg} = tags;
const BarChartHorizontalBig = (props) => 
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
	tags.rect({"x":"7","y":"13","width":"9","height":"4","rx":"1"}),
	tags.rect({"x":"7","y":"5","width":"12","height":"4","rx":"1"})
    )
export default BarChartHorizontalBig;
