import {tags} from 'ziko';
const {svg} = tags;
const Lollipop = (props) => 
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
    tags.circle({"cx":"11","cy":"11","r":"8"}),
	tags.path({"d":"m21 21-4.3-4.3"}),
	tags.path({"d":"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"})
    )
export default Lollipop;
