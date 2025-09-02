import {tags} from 'ziko';
const {svg} = tags;
const Angry = (props) => 
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
	tags.path({"d":"M16 16s-1.5-2-4-2-4 2-4 2"}),
	tags.path({"d":"M7.5 8 10 9"}),
	tags.path({"d":"m14 9 2.5-1"}),
	tags.path({"d":"M9 10h.01"}),
	tags.path({"d":"M15 10h.01"})
    )
export default Angry;
