import {tags} from 'ziko';
const {svg} = tags;
const ArrowUpFromLine = (props) => 
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
    tags.path({"d":"m18 9-6-6-6 6"}),
	tags.path({"d":"M12 3v14"}),
	tags.path({"d":"M5 21h14"})
    )
export default ArrowUpFromLine;
