import {tags} from 'ziko';
const {svg} = tags;
const TentTree = (props) => 
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
    tags.circle({"cx":"4","cy":"4","r":"2"}),
	tags.path({"d":"m14 5 3-3 3 3"}),
	tags.path({"d":"m14 10 3-3 3 3"}),
	tags.path({"d":"M17 14V2"}),
	tags.path({"d":"M17 14H7l-5 8h20Z"}),
	tags.path({"d":"M8 14v8"}),
	tags.path({"d":"m9 14 5 8"})
    )
export default TentTree;
