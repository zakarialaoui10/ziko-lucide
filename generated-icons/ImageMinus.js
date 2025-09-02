import {tags} from 'ziko';
const {svg} = tags;
const ImageMinus = (props) => 
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
    tags.path({"d":"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}),
	tags.line({"x1":"16","x2":"22","y1":"5","y2":"5"}),
	tags.circle({"cx":"9","cy":"9","r":"2"}),
	tags.path({"d":"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"})
    )
export default ImageMinus;
