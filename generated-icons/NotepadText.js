import {tags} from 'ziko';
const {svg} = tags;
const NotepadText = (props) => 
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
	tags.rect({"width":"16","height":"18","x":"4","y":"4","rx":"2"}),
	tags.path({"d":"M8 10h6"}),
	tags.path({"d":"M8 14h8"}),
	tags.path({"d":"M8 18h5"})
    )
export default NotepadText;
