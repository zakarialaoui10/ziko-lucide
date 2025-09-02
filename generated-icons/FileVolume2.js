import {tags} from 'ziko';
const {svg} = tags;
const FileVolume2 = (props) => 
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
	tags.path({"d":"M8 15h.01"}),
	tags.path({"d":"M11.5 13.5a2.5 2.5 0 0 1 0 3"}),
	tags.path({"d":"M15 12a5 5 0 0 1 0 6"})
    )
export default FileVolume2;
