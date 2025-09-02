import {tags} from 'ziko';
const {svg} = tags;
const RedoDot = (props) => 
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
    tags.circle({"cx":"12","cy":"17","r":"1"}),
	tags.path({"d":"M21 7v6h-6"}),
	tags.path({"d":"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"})
    )
export default RedoDot;
