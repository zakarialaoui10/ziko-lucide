import {tags} from 'ziko';
const {svg} = tags;
const ArrowUpFromDot = (props) => 
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
    tags.path({"d":"m5 9 7-7 7 7"}),
	tags.path({"d":"M12 16V2"}),
	tags.circle({"cx":"12","cy":"21","r":"1"})
    )
export default ArrowUpFromDot;
