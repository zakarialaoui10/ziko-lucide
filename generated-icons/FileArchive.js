import {tags} from 'ziko';
const {svg} = tags;
const FileArchive = (props) => 
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
    tags.path({"d":"M10 12v-1"}),
	tags.path({"d":"M10 18v-2"}),
	tags.path({"d":"M10 7V6"}),
	tags.path({"d":"M14 2v4a2 2 0 0 0 2 2h4"}),
	tags.path({"d":"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"}),
	tags.circle({"cx":"10","cy":"20","r":"2"})
    )
export default FileArchive;
