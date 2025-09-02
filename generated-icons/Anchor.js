import {tags} from 'ziko';
const {svg} = tags;
const Anchor = (props) => 
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
    tags.path({"d":"M12 22V8"}),
	tags.path({"d":"M5 12H2a10 10 0 0 0 20 0h-3"}),
	tags.circle({"cx":"12","cy":"5","r":"3"})
    )
export default Anchor;
