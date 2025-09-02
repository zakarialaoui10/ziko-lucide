import {tags} from 'ziko';
const {svg} = tags;
const ClockArrowUp = (props) => 
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
    tags.path({"d":"M12 6v6l1.56.78"}),
	tags.path({"d":"M13.227 21.925a10 10 0 1 1 8.767-9.588"}),
	tags.path({"d":"m14 18 4-4 4 4"}),
	tags.path({"d":"M18 22v-8"})
    )
export default ClockArrowUp;
