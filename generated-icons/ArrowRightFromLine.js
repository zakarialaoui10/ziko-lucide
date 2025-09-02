import {tags} from 'ziko';
const {svg} = tags;
const ArrowRightFromLine = (props) => 
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
    tags.path({"d":"M3 5v14"}),
	tags.path({"d":"M21 12H7"}),
	tags.path({"d":"m15 18 6-6-6-6"})
    )
export default ArrowRightFromLine;
