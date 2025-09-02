import {tags} from 'ziko';
const {svg} = tags;
const ClockArrowDown = (props) => 
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
    tags.path({"d":"M12 6v6l2 1"}),
	tags.path({"d":"M12.337 21.994a10 10 0 1 1 9.588-8.767"}),
	tags.path({"d":"m14 18 4 4 4-4"}),
	tags.path({"d":"M18 14v8"})
    )
export default ClockArrowDown;
