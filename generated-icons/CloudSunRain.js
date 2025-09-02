import {tags} from 'ziko';
const {svg} = tags;
const CloudSunRain = (props) => 
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
    tags.path({"d":"M12 2v2"}),
	tags.path({"d":"m4.93 4.93 1.41 1.41"}),
	tags.path({"d":"M20 12h2"}),
	tags.path({"d":"m19.07 4.93-1.41 1.41"}),
	tags.path({"d":"M15.947 12.65a4 4 0 0 0-5.925-4.128"}),
	tags.path({"d":"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}),
	tags.path({"d":"M11 20v2"}),
	tags.path({"d":"M7 19v2"})
    )
export default CloudSunRain;
