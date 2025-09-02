import {tags} from 'ziko';
const {svg} = tags;
const StarOff = (props) => 
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
    tags.path({"d":"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}),
	tags.path({"d":"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}),
	tags.line({"x1":"2","x2":"22","y1":"2","y2":"22"})
    )
export default StarOff;
