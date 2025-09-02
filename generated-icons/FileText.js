import {tags} from 'ziko';
const {svg} = tags;
const FileText = (props) => 
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
	tags.path({"d":"M14 2v4a2 2 0 0 0 2 2h4"}),
	tags.path({"d":"M10 9H8"}),
	tags.path({"d":"M16 13H8"}),
	tags.path({"d":"M16 17H8"})
    )
export default FileText;
