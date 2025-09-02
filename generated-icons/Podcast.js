import {tags} from 'ziko';
const {svg} = tags;
const Podcast = (props) => 
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
    tags.path({"d":"M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z","fill":"currentColor"}),
	tags.path({"d":"M16.85 18.58a9 9 0 1 0-9.7 0"}),
	tags.path({"d":"M8 14a5 5 0 1 1 8 0"}),
	tags.circle({"cx":"12","cy":"11","r":"1","fill":"currentColor"})
    )
export default Podcast;
