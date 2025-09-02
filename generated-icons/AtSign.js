import {tags} from 'ziko';
const {svg} = tags;
const AtSign = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"4"}),
	tags.path({"d":"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"})
    )
export default AtSign;
