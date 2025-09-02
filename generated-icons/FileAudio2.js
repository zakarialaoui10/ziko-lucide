import {tags} from 'ziko';
const {svg} = tags;
const FileAudio2 = (props) => 
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
    tags.path({"d":"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}),
	tags.path({"d":"M14 2v4a2 2 0 0 0 2 2h4"}),
	tags.circle({"cx":"3","cy":"17","r":"1"}),
	tags.path({"d":"M2 17v-3a4 4 0 0 1 8 0v3"}),
	tags.circle({"cx":"9","cy":"17","r":"1"})
    )
export default FileAudio2;
