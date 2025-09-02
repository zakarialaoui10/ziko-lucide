import {tags} from 'ziko';
const {svg} = tags;
const ClockAlert = (props) => 
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
    tags.path({"d":"M12 6v6l4 2"}),
	tags.path({"d":"M20 12v5"}),
	tags.path({"d":"M20 21h.01"}),
	tags.path({"d":"M21.25 8.2A10 10 0 1 0 16 21.16"})
    )
export default ClockAlert;
