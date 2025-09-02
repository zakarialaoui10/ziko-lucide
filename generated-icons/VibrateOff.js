import {tags} from 'ziko';
const {svg} = tags;
const VibrateOff = (props) => 
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
    tags.path({"d":"m2 8 2 2-2 2 2 2-2 2"}),
	tags.path({"d":"m22 8-2 2 2 2-2 2 2 2"}),
	tags.path({"d":"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}),
	tags.path({"d":"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}),
	tags.line({"x1":"2","x2":"22","y1":"2","y2":"22"})
    )
export default VibrateOff;
