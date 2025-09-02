import {tags} from 'ziko';
const {svg} = tags;
const Joystick = (props) => 
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
    tags.path({"d":"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}),
	tags.path({"d":"M6 15v-2"}),
	tags.path({"d":"M12 15V9"}),
	tags.circle({"cx":"12","cy":"6","r":"3"})
    )
export default Joystick;
