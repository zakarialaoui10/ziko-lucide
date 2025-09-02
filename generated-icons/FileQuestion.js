import {tags} from 'ziko';
const {svg} = tags;
const FileQuestion = (props) => 
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
    tags.path({"d":"M12 17h.01"}),
	tags.path({"d":"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}),
	tags.path({"d":"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"})
    )
export default FileQuestion;
