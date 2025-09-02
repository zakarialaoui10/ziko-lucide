import {tags} from 'ziko';
const {svg} = tags;
const Ellipsis = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"1"}),
	tags.circle({"cx":"19","cy":"12","r":"1"}),
	tags.circle({"cx":"5","cy":"12","r":"1"})
    )
export default Ellipsis;
