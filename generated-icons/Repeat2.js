import {tags} from 'ziko';
const {svg} = tags;
const Repeat2 = (props) => 
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
    tags.path({"d":"m2 9 3-3 3 3"}),
	tags.path({"d":"M13 18H7a2 2 0 0 1-2-2V6"}),
	tags.path({"d":"m22 15-3 3-3-3"}),
	tags.path({"d":"M11 6h6a2 2 0 0 1 2 2v10"})
    )
export default Repeat2;
