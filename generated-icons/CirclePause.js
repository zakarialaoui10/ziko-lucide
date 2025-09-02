import {tags} from 'ziko';
const {svg} = tags;
const CirclePause = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.line({"x1":"10","x2":"10","y1":"15","y2":"9"}),
	tags.line({"x1":"14","x2":"14","y1":"15","y2":"9"})
    )
export default CirclePause;
