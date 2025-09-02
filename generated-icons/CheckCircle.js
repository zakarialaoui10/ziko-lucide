import {tags} from 'ziko';
const {svg} = tags;
const CheckCircle = (props) => 
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
    tags.path({"d":"M21.801 10A10 10 0 1 1 17 3.335"}),
	tags.path({"d":"m9 11 3 3L22 4"})
    )
export default CheckCircle;
