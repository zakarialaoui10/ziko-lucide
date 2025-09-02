import {tags} from 'ziko';
const {svg} = tags;
const School = (props) => 
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
    tags.path({"d":"M14 21v-3a2 2 0 0 0-4 0v3"}),
	tags.path({"d":"M18 5v16"}),
	tags.path({"d":"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"}),
	tags.path({"d":"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"}),
	tags.path({"d":"M6 5v16"}),
	tags.circle({"cx":"12","cy":"9","r":"2"})
    )
export default School;
