import {tags} from 'ziko';
const {svg} = tags;
const Antenna = (props) => 
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
    tags.path({"d":"M2 12 7 2"}),
	tags.path({"d":"m7 12 5-10"}),
	tags.path({"d":"m12 12 5-10"}),
	tags.path({"d":"m17 12 5-10"}),
	tags.path({"d":"M4.5 7h15"}),
	tags.path({"d":"M12 16v6"})
    )
export default Antenna;
