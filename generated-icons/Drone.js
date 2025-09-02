import {tags} from 'ziko';
const {svg} = tags;
const Drone = (props) => 
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
    tags.path({"d":"M10 10 7 7"}),
	tags.path({"d":"m10 14-3 3"}),
	tags.path({"d":"m14 10 3-3"}),
	tags.path({"d":"m14 14 3 3"}),
	tags.path({"d":"M14.205 4.139a4 4 0 1 1 5.439 5.863"}),
	tags.path({"d":"M19.637 14a4 4 0 1 1-5.432 5.868"}),
	tags.path({"d":"M4.367 10a4 4 0 1 1 5.438-5.862"}),
	tags.path({"d":"M9.795 19.862a4 4 0 1 1-5.429-5.873"}),
	tags.rect({"x":"10","y":"8","width":"4","height":"8","rx":"1"})
    )
export default Drone;
