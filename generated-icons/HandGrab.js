import {tags} from 'ziko';
const {svg} = tags;
const HandGrab = (props) => 
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
    tags.path({"d":"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}),
	tags.path({"d":"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}),
	tags.path({"d":"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}),
	tags.path({"d":"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}),
	tags.path({"d":"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"})
    )
export default HandGrab;
