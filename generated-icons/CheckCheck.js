import {tags} from 'ziko';
const {svg} = tags;
const CheckCheck = (props) => 
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
    tags.path({"d":"M18 6 7 17l-5-5"}),
	tags.path({"d":"m22 10-7.5 7.5L13 16"})
    )
export default CheckCheck;
