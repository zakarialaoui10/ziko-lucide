import {tags} from 'ziko';
const {svg} = tags;
const FileSymlink = (props) => 
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
    tags.path({"d":"m10 18 3-3-3-3"}),
	tags.path({"d":"M14 2v4a2 2 0 0 0 2 2h4"}),
	tags.path({"d":"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"})
    )
export default FileSymlink;
