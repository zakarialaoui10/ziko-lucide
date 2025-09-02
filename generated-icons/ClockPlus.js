import {tags} from 'ziko';
const {svg} = tags;
const ClockPlus = (props) => 
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
    tags.path({"d":"M12 6v6l3.644 1.822"}),
	tags.path({"d":"M16 19h6"}),
	tags.path({"d":"M19 16v6"}),
	tags.path({"d":"M21.92 13.267a10 10 0 1 0-8.653 8.653"})
    )
export default ClockPlus;
