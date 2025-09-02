import {tags} from 'ziko';
const {svg} = tags;
const Snail = (props) => 
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
    tags.path({"d":"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),
	tags.circle({"cx":"10","cy":"13","r":"8"}),
	tags.path({"d":"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),
	tags.path({"d":"M18 3 19.1 5.2"}),
	tags.path({"d":"M22 3 20.9 5.2"})
    )
export default Snail;
