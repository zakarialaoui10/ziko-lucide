import {tags} from 'ziko';
const {svg} = tags;
const WifiLow = (props) => 
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
	tags.path({"d":"M8.5 16.429a5 5 0 0 1 7 0"})
    )
export default WifiLow;
