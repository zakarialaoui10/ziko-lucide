import {tags} from 'ziko';
const {svg} = tags;
const FileOutput = (props) => 
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
    tags.path({"d":"M14 2v4a2 2 0 0 0 2 2h4"}),
	tags.path({"d":"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}),
	tags.path({"d":"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}),
	tags.path({"d":"m5 11-3 3"}),
	tags.path({"d":"m5 17-3-3h10"})
    )
export default FileOutput;
