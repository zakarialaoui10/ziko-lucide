import {tags} from 'ziko';
const {svg} = tags;
const GitCommitVertical = (props) => 
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
    tags.path({"d":"M12 3v6"}),
	tags.circle({"cx":"12","cy":"12","r":"3"}),
	tags.path({"d":"M12 15v6"})
    )
export default GitCommitVertical;
