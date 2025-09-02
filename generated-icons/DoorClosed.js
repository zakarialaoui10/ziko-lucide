import {tags} from 'ziko';
const {svg} = tags;
const DoorClosed = (props) => 
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
	tags.path({"d":"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}),
	tags.path({"d":"M2 20h20"})
    )
export default DoorClosed;
