import {tags} from 'ziko';
const {svg} = tags;
const ArrowDownToLine = (props) => 
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
    tags.path({"d":"M12 17V3"}),
	tags.path({"d":"m6 11 6 6 6-6"}),
	tags.path({"d":"M19 21H5"})
    )
export default ArrowDownToLine;
