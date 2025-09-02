import {tags} from 'ziko';
const {svg} = tags;
const MicOff = (props) => 
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
    tags.path({"d":"M12 19v3"}),
	tags.path({"d":"M15 9.34V5a3 3 0 0 0-5.68-1.33"}),
	tags.path({"d":"M16.95 16.95A7 7 0 0 1 5 12v-2"}),
	tags.path({"d":"M18.89 13.23A7 7 0 0 0 19 12v-2"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M9 9v3a3 3 0 0 0 5.12 2.12"})
    )
export default MicOff;
