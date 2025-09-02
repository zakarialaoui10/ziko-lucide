import {tags} from 'ziko';
const {svg} = tags;
const Medal = (props) => 
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
    tags.path({"d":"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}),
	tags.path({"d":"M11 12 5.12 2.2"}),
	tags.path({"d":"m13 12 5.88-9.8"}),
	tags.path({"d":"M8 7h8"}),
	tags.circle({"cx":"12","cy":"17","r":"5"}),
	tags.path({"d":"M12 18v-2h-.5"})
    )
export default Medal;
