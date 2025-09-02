import {tags} from 'ziko';
const {svg} = tags;
const Music2 = (props) => 
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
    tags.circle({"cx":"8","cy":"18","r":"4"}),
	tags.path({"d":"M12 18V2l7 4"})
    )
export default Music2;
