import {tags} from 'ziko';
const {svg} = tags;
const CornerLeftDown = (props) => 
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
    tags.path({"d":"m14 15-5 5-5-5"}),
	tags.path({"d":"M20 4h-7a4 4 0 0 0-4 4v12"})
    )
export default CornerLeftDown;
