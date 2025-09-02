import {tags} from 'ziko';
const {svg} = tags;
const Move3d = (props) => 
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
    tags.path({"d":"M5 3v16h16"}),
	tags.path({"d":"m5 19 6-6"}),
	tags.path({"d":"m2 6 3-3 3 3"}),
	tags.path({"d":"m18 16 3 3-3 3"})
    )
export default Move3d;
