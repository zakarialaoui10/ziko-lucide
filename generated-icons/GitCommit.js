import {tags} from 'ziko';
const {svg} = tags;
const GitCommit = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"3"}),
	tags.line({"x1":"3","x2":"9","y1":"12","y2":"12"}),
	tags.line({"x1":"15","x2":"21","y1":"12","y2":"12"})
    )
export default GitCommit;
