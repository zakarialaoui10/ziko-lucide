import {tags} from 'ziko';
const {svg} = tags;
const Frame = (props) => 
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
    tags.line({"x1":"22","x2":"2","y1":"6","y2":"6"}),
	tags.line({"x1":"22","x2":"2","y1":"18","y2":"18"}),
	tags.line({"x1":"6","x2":"6","y1":"2","y2":"22"}),
	tags.line({"x1":"18","x2":"18","y1":"2","y2":"22"})
    )
export default Frame;
