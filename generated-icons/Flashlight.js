import {tags} from 'ziko';
const {svg} = tags;
const Flashlight = (props) => 
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
    tags.path({"d":"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}),
	tags.line({"x1":"6","x2":"18","y1":"6","y2":"6"}),
	tags.line({"x1":"12","x2":"12","y1":"12","y2":"12"})
    )
export default Flashlight;
