import {tags} from 'ziko';
const {svg} = tags;
const CornerLeftUp = (props) => 
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
    tags.path({"d":"M14 9 9 4 4 9"}),
	tags.path({"d":"M20 20h-7a4 4 0 0 1-4-4V4"})
    )
export default CornerLeftUp;
