import {tags} from 'ziko';
const {svg} = tags;
const ScanHeart = (props) => 
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
    tags.path({"d":"M17 3h2a2 2 0 0 1 2 2v2"}),
	tags.path({"d":"M21 17v2a2 2 0 0 1-2 2h-2"}),
	tags.path({"d":"M3 7V5a2 2 0 0 1 2-2h2"}),
	tags.path({"d":"M7 21H5a2 2 0 0 1-2-2v-2"}),
	tags.path({"d":"M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z"})
    )
export default ScanHeart;
