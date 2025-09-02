import {tags} from 'ziko';
const {svg} = tags;
const FileMusic = (props) => 
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
    tags.path({"d":"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"}),
	tags.path({"d":"M8 18v-7.7L16 9v7"}),
	tags.circle({"cx":"14","cy":"16","r":"2"}),
	tags.circle({"cx":"6","cy":"18","r":"2"})
    )
export default FileMusic;
