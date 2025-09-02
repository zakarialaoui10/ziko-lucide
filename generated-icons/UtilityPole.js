import {tags} from 'ziko';
const {svg} = tags;
const UtilityPole = (props) => 
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
    tags.path({"d":"M12 2v20"}),
	tags.path({"d":"M2 5h20"}),
	tags.path({"d":"M3 3v2"}),
	tags.path({"d":"M7 3v2"}),
	tags.path({"d":"M17 3v2"}),
	tags.path({"d":"M21 3v2"}),
	tags.path({"d":"m19 5-7 7-7-7"})
    )
export default UtilityPole;
