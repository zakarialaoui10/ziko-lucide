import {tags} from 'ziko';
const {svg} = tags;
const FileImage = (props) => 
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
	tags.circle({"cx":"10","cy":"12","r":"2"}),
	tags.path({"d":"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"})
    )
export default FileImage;
