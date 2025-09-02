import {tags} from 'ziko';
const {svg} = tags;
const DoorClosedLocked = (props) => 
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
    tags.path({"d":"M10 12h.01"}),
	tags.path({"d":"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}),
	tags.path({"d":"M2 20h8"}),
	tags.path({"d":"M20 17v-2a2 2 0 1 0-4 0v2"}),
	tags.rect({"x":"14","y":"17","width":"8","height":"5","rx":"1"})
    )
export default DoorClosedLocked;
