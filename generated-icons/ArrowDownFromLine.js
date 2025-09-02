import {tags} from 'ziko';
const {svg} = tags;
const ArrowDownFromLine = (props) => 
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
    tags.path({"d":"M19 3H5"}),
	tags.path({"d":"M12 21V7"}),
	tags.path({"d":"m6 15 6 6 6-6"})
    )
export default ArrowDownFromLine;
