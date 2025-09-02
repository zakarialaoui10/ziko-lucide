import {tags} from 'ziko';
const {svg} = tags;
const CaseLower = (props) => 
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
    tags.path({"d":"M10 9v7"}),
	tags.path({"d":"M14 6v10"}),
	tags.circle({"cx":"17.5","cy":"12.5","r":"3.5"}),
	tags.circle({"cx":"6.5","cy":"12.5","r":"3.5"})
    )
export default CaseLower;
