import {tags} from 'ziko';
const {svg} = tags;
const PowerCircle = (props) => 
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
    tags.path({"d":"M12 7v4"}),
	tags.path({"d":"M7.998 9.003a5 5 0 1 0 8-.005"}),
	tags.circle({"cx":"12","cy":"12","r":"10"})
    )
export default PowerCircle;
