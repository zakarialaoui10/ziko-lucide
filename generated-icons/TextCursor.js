import {tags} from 'ziko';
const {svg} = tags;
const TextCursor = (props) => 
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
    tags.path({"d":"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}),
	tags.path({"d":"M7 22h1a4 4 0 0 0 4-4v-1"}),
	tags.path({"d":"M7 2h1a4 4 0 0 1 4 4v1"})
    )
export default TextCursor;
