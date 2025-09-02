import {tags} from 'ziko';
const {svg} = tags;
const FileUser = (props) => 
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
	tags.path({"d":"M15 18a3 3 0 1 0-6 0"}),
	tags.path({"d":"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}),
	tags.circle({"cx":"12","cy":"13","r":"2"})
    )
export default FileUser;
