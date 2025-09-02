import {tags} from 'ziko';
const {svg} = tags;
const FileLock2 = (props) => 
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
    tags.path({"d":"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}),
	tags.path({"d":"M14 2v4a2 2 0 0 0 2 2h4"}),
	tags.rect({"width":"8","height":"5","x":"2","y":"13","rx":"1"}),
	tags.path({"d":"M8 13v-2a2 2 0 1 0-4 0v2"})
    )
export default FileLock2;
