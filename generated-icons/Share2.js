import {tags} from 'ziko';
const {svg} = tags;
const Share2 = (props) => 
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
    tags.circle({"cx":"18","cy":"5","r":"3"}),
	tags.circle({"cx":"6","cy":"12","r":"3"}),
	tags.circle({"cx":"18","cy":"19","r":"3"}),
	tags.line({"x1":"8.59","x2":"15.42","y1":"13.51","y2":"17.49"}),
	tags.line({"x1":"15.41","x2":"8.59","y1":"6.51","y2":"10.49"})
    )
export default Share2;
