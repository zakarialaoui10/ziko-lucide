import {tags} from 'ziko';
const {svg} = tags;
const ArrowDown = (props) => 
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
    tags.path({"d":"M12 5v14"}),
	tags.path({"d":"m19 12-7 7-7-7"})
    )
export default ArrowDown;
