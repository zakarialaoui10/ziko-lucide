import {tags} from 'ziko';
const {svg} = tags;
const Package = (props) => 
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
    tags.path({"d":"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}),
	tags.path({"d":"M12 22V12"}),
	tags.polyline({"points":"3.29 7 12 12 20.71 7"}),
	tags.path({"d":"m7.5 4.27 9 5.15"})
    )
export default Package;
