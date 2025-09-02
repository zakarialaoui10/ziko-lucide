import {tags} from 'ziko';
const {svg} = tags;
const WifiOff = (props) => 
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
    tags.path({"d":"M12 20h.01"}),
	tags.path({"d":"M8.5 16.429a5 5 0 0 1 7 0"}),
	tags.path({"d":"M5 12.859a10 10 0 0 1 5.17-2.69"}),
	tags.path({"d":"M19 12.859a10 10 0 0 0-2.007-1.523"}),
	tags.path({"d":"M2 8.82a15 15 0 0 1 4.177-2.643"}),
	tags.path({"d":"M22 8.82a15 15 0 0 0-11.288-3.764"}),
	tags.path({"d":"m2 2 20 20"})
    )
export default WifiOff;
