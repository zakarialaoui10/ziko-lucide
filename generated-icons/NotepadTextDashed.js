import {tags} from 'ziko';
const {svg} = tags;
const NotepadTextDashed = (props) => 
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
    tags.path({"d":"M8 2v4"}),
	tags.path({"d":"M12 2v4"}),
	tags.path({"d":"M16 2v4"}),
	tags.path({"d":"M16 4h2a2 2 0 0 1 2 2v2"}),
	tags.path({"d":"M20 12v2"}),
	tags.path({"d":"M20 18v2a2 2 0 0 1-2 2h-1"}),
	tags.path({"d":"M13 22h-2"}),
	tags.path({"d":"M7 22H6a2 2 0 0 1-2-2v-2"}),
	tags.path({"d":"M4 14v-2"}),
	tags.path({"d":"M4 8V6a2 2 0 0 1 2-2h2"}),
	tags.path({"d":"M8 10h6"}),
	tags.path({"d":"M8 14h8"}),
	tags.path({"d":"M8 18h5"})
    )
export default NotepadTextDashed;
