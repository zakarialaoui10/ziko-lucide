import {tags} from 'ziko';
const {svg} = tags;
const WifiPen = (props) => 
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
    tags.path({"d":"M2 8.82a15 15 0 0 1 20 0"}),
	tags.path({"d":"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}),
	tags.path({"d":"M5 12.859a10 10 0 0 1 10.5-2.222"}),
	tags.path({"d":"M8.5 16.429a5 5 0 0 1 3-1.406"})
    )
export default WifiPen;
