import {tags} from 'ziko';
const {svg} = tags;
const WrapText = (props) => 
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
    tags.path({"d":"m16 16-2 2 2 2"}),
	tags.path({"d":"M3 12h15a3 3 0 1 1 0 6h-4"}),
	tags.path({"d":"M3 18h7"}),
	tags.path({"d":"M3 6h18"})
    )
export default WrapText;
