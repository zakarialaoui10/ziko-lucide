import {tags} from 'ziko';
const {svg} = tags;
const MarsStroke = (props) => 
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
    tags.path({"d":"m14 6 4 4"}),
	tags.path({"d":"M17 3h4v4"}),
	tags.path({"d":"m21 3-7.75 7.75"}),
	tags.circle({"cx":"9","cy":"15","r":"6"})
    )
export default MarsStroke;
