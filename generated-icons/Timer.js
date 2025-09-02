import {tags} from 'ziko';
const {svg} = tags;
const Timer = (props) => 
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
    tags.line({"x1":"10","x2":"14","y1":"2","y2":"2"}),
	tags.line({"x1":"12","x2":"15","y1":"14","y2":"11"}),
	tags.circle({"cx":"12","cy":"14","r":"8"})
    )
export default Timer;
