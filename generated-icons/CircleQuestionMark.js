import {tags} from 'ziko';
const {svg} = tags;
const CircleQuestionMark = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.path({"d":"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),
	tags.path({"d":"M12 17h.01"})
    )
export default CircleQuestionMark;
