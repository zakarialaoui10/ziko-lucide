import {tags} from 'ziko';
const {svg} = tags;
const GaugeCircle = (props) => 
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
    tags.path({"d":"M15.6 2.7a10 10 0 1 0 5.7 5.7"}),
	tags.circle({"cx":"12","cy":"12","r":"2"}),
	tags.path({"d":"M13.4 10.6 19 5"})
    )
export default GaugeCircle;
