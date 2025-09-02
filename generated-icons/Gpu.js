import {tags} from 'ziko';
const {svg} = tags;
const Gpu = (props) => 
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
    tags.path({"d":"M2 21V3"}),
	tags.path({"d":"M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26"}),
	tags.path({"d":"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"}),
	tags.circle({"cx":"16","cy":"11","r":"2"}),
	tags.circle({"cx":"8","cy":"11","r":"2"})
    )
export default Gpu;
