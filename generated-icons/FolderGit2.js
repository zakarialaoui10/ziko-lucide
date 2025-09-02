import {tags} from 'ziko';
const {svg} = tags;
const FolderGit2 = (props) => 
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
    tags.path({"d":"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}),
	tags.circle({"cx":"13","cy":"12","r":"2"}),
	tags.path({"d":"M18 19c-2.8 0-5-2.2-5-5v8"}),
	tags.circle({"cx":"20","cy":"19","r":"2"})
    )
export default FolderGit2;
