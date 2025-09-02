import {tags} from 'ziko';
const {svg} = tags;
const CloudRainWind = (props) => 
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
    tags.path({"d":"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}),
	tags.path({"d":"m9.2 22 3-7"}),
	tags.path({"d":"m9 13-3 7"}),
	tags.path({"d":"m17 13-3 7"})
    )
export default CloudRainWind;
