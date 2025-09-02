import {tags} from 'ziko';
const {svg} = tags;
const ScatterChart = (props) => 
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
    tags.circle({"cx":"7.5","cy":"7.5","r":".5","fill":"currentColor"}),
	tags.circle({"cx":"18.5","cy":"5.5","r":".5","fill":"currentColor"}),
	tags.circle({"cx":"11.5","cy":"11.5","r":".5","fill":"currentColor"}),
	tags.circle({"cx":"7.5","cy":"16.5","r":".5","fill":"currentColor"}),
	tags.circle({"cx":"17.5","cy":"14.5","r":".5","fill":"currentColor"}),
	tags.path({"d":"M3 3v16a2 2 0 0 0 2 2h16"})
    )
export default ScatterChart;
