import {tags} from 'ziko';
const {svg} = tags;
const CircleParkingOff = (props) => 
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
    tags.path({"d":"M12.656 7H13a3 3 0 0 1 2.984 3.307"}),
	tags.path({"d":"M13 13H9"}),
	tags.path({"d":"M19.071 19.071A1 1 0 0 1 4.93 4.93"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M8.357 2.687a10 10 0 0 1 12.956 12.956"}),
	tags.path({"d":"M9 17V9"})
    )
export default CircleParkingOff;
