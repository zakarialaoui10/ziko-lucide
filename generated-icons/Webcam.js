import {tags} from 'ziko';
const {svg} = tags;
const Webcam = (props) => 
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
    tags.circle({"cx":"12","cy":"10","r":"8"}),
	tags.circle({"cx":"12","cy":"10","r":"3"}),
	tags.path({"d":"M7 22h10"}),
	tags.path({"d":"M12 22v-4"})
    )
export default Webcam;
