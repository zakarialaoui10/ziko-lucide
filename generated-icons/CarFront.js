import {tags} from 'ziko';
const {svg} = tags;
const CarFront = (props) => 
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
    tags.path({"d":"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}),
	tags.path({"d":"M7 14h.01"}),
	tags.path({"d":"M17 14h.01"}),
	tags.rect({"width":"18","height":"8","x":"3","y":"10","rx":"2"}),
	tags.path({"d":"M5 18v2"}),
	tags.path({"d":"M19 18v2"})
    )
export default CarFront;
