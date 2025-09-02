import {tags} from 'ziko';
const {svg} = tags;
const TextCursorInput = (props) => 
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
    tags.path({"d":"M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"}),
	tags.path({"d":"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}),
	tags.path({"d":"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}),
	tags.path({"d":"M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"}),
	tags.path({"d":"M9 6v12"})
    )
export default TextCursorInput;
