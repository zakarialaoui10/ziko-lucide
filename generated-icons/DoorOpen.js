import {tags} from 'ziko';
const {svg} = tags;
const DoorOpen = (props) => 
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
    tags.path({"d":"M11 20H2"}),
	tags.path({"d":"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"}),
	tags.path({"d":"M11 4H8a2 2 0 0 0-2 2v14"}),
	tags.path({"d":"M14 12h.01"}),
	tags.path({"d":"M22 20h-3"})
    )
export default DoorOpen;
