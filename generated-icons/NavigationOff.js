import {tags} from 'ziko';
const {svg} = tags;
const NavigationOff = (props) => 
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
    tags.path({"d":"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}),
	tags.path({"d":"M17.39 11.73 22 2l-9.73 4.61"}),
	tags.line({"x1":"2","x2":"22","y1":"2","y2":"22"})
    )
export default NavigationOff;
