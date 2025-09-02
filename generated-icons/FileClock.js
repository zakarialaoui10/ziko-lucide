import {tags} from 'ziko';
const {svg} = tags;
const FileClock = (props) => 
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
	tags.path({"d":"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}),
	tags.path({"d":"M8 14v2.2l1.6 1"}),
	tags.circle({"cx":"8","cy":"16","r":"6"})
    )
export default FileClock;
