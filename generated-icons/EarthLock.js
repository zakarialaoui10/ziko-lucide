import {tags} from 'ziko';
const {svg} = tags;
const EarthLock = (props) => 
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
    tags.path({"d":"M7 3.34V5a3 3 0 0 0 3 3"}),
	tags.path({"d":"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}),
	tags.path({"d":"M21.54 15H17a2 2 0 0 0-2 2v4.54"}),
	tags.path({"d":"M12 2a10 10 0 1 0 9.54 13"}),
	tags.path({"d":"M20 6V4a2 2 0 1 0-4 0v2"}),
	tags.rect({"width":"8","height":"5","x":"14","y":"6","rx":"1"})
    )
export default EarthLock;
