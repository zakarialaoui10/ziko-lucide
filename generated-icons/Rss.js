import {tags} from 'ziko';
const {svg} = tags;
const Rss = (props) => 
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
    tags.path({"d":"M4 11a9 9 0 0 1 9 9"}),
	tags.path({"d":"M4 4a16 16 0 0 1 16 16"}),
	tags.circle({"cx":"5","cy":"19","r":"1"})
    )
export default Rss;
