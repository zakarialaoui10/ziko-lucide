import {tags} from 'ziko';
const {svg} = tags;
const ArrowLeftFromLine = (props) => 
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
    tags.path({"d":"m9 6-6 6 6 6"}),
	tags.path({"d":"M3 12h14"}),
	tags.path({"d":"M21 19V5"})
    )
export default ArrowLeftFromLine;
