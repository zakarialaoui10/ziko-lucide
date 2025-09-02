import {tags} from 'ziko';
const {svg} = tags;
const ArrowUp = (props) => 
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
    tags.path({"d":"m5 12 7-7 7 7"}),
	tags.path({"d":"M12 19V5"})
    )
export default ArrowUp;
