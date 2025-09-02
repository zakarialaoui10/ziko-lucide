import {tags} from 'ziko';
const {svg} = tags;
const BaggageClaim = (props) => 
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
    tags.path({"d":"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}),
	tags.path({"d":"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}),
	tags.rect({"width":"13","height":"8","x":"8","y":"6","rx":"1"}),
	tags.circle({"cx":"18","cy":"20","r":"2"}),
	tags.circle({"cx":"9","cy":"20","r":"2"})
    )
export default BaggageClaim;
