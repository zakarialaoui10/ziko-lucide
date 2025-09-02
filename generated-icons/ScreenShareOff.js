import {tags} from 'ziko';
const {svg} = tags;
const ScreenShareOff = (props) => 
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
    tags.path({"d":"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}),
	tags.path({"d":"M8 21h8"}),
	tags.path({"d":"M12 17v4"}),
	tags.path({"d":"m22 3-5 5"}),
	tags.path({"d":"m17 3 5 5"})
    )
export default ScreenShareOff;
