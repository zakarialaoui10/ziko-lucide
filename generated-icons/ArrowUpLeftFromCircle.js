import {tags} from 'ziko';
const {svg} = tags;
const ArrowUpLeftFromCircle = (props) => 
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
    tags.path({"d":"M2 8V2h6"}),
	tags.path({"d":"m2 2 10 10"}),
	tags.path({"d":"M12 2A10 10 0 1 1 2 12"})
    )
export default ArrowUpLeftFromCircle;
