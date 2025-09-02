import {tags} from 'ziko';
const {svg} = tags;
const Scissors = (props) => 
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
    tags.circle({"cx":"6","cy":"6","r":"3"}),
	tags.path({"d":"M8.12 8.12 12 12"}),
	tags.path({"d":"M20 4 8.12 15.88"}),
	tags.circle({"cx":"6","cy":"18","r":"3"}),
	tags.path({"d":"M14.8 14.8 20 20"})
    )
export default Scissors;
