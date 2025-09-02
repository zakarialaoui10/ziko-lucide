import {tags} from 'ziko';
const {svg} = tags;
const FileLock = (props) => 
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
    tags.path({"d":"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}),
	tags.rect({"width":"8","height":"6","x":"8","y":"12","rx":"1"}),
	tags.path({"d":"M10 12v-2a2 2 0 1 1 4 0v2"})
    )
export default FileLock;
