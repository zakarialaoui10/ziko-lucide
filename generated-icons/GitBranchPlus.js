import {tags} from 'ziko';
const {svg} = tags;
const GitBranchPlus = (props) => 
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
    tags.path({"d":"M6 3v12"}),
	tags.path({"d":"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}),
	tags.path({"d":"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}),
	tags.path({"d":"M15 6a9 9 0 0 0-9 9"}),
	tags.path({"d":"M18 15v6"}),
	tags.path({"d":"M21 18h-6"})
    )
export default GitBranchPlus;
