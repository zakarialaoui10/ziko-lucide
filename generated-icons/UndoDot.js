import {tags} from 'ziko';
const {svg} = tags;
const UndoDot = (props) => 
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
    tags.path({"d":"M21 17a9 9 0 0 0-15-6.7L3 13"}),
	tags.path({"d":"M3 7v6h6"}),
	tags.circle({"cx":"12","cy":"17","r":"1"})
    )
export default UndoDot;
