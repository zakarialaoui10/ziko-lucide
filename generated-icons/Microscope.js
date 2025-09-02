import {tags} from 'ziko';
const {svg} = tags;
const Microscope = (props) => 
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
    tags.path({"d":"M6 18h8"}),
	tags.path({"d":"M3 22h18"}),
	tags.path({"d":"M14 22a7 7 0 1 0 0-14h-1"}),
	tags.path({"d":"M9 14h2"}),
	tags.path({"d":"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}),
	tags.path({"d":"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"})
    )
export default Microscope;
