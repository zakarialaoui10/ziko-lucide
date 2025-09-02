import {tags} from 'ziko';
const {svg} = tags;
const SwitchCamera = (props) => 
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
    tags.path({"d":"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}),
	tags.path({"d":"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}),
	tags.circle({"cx":"12","cy":"12","r":"3"}),
	tags.path({"d":"m18 22-3-3 3-3"}),
	tags.path({"d":"m6 2 3 3-3 3"})
    )
export default SwitchCamera;
