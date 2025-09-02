import {tags} from 'ziko';
const {svg} = tags;
const ParkingMeter = (props) => 
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
    tags.path({"d":"M11 15h2"}),
	tags.path({"d":"M12 12v3"}),
	tags.path({"d":"M12 19v3"}),
	tags.path({"d":"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"}),
	tags.path({"d":"M9 9a3 3 0 1 1 6 0"})
    )
export default ParkingMeter;
