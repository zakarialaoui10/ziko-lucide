import {tags} from 'ziko';
const {svg} = tags;
const CigaretteOff = (props) => 
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
    tags.path({"d":"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}),
	tags.path({"d":"M18 8c0-2.5-2-2.5-2-5"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}),
	tags.path({"d":"M22 8c0-2.5-2-2.5-2-5"}),
	tags.path({"d":"M7 12v4"})
    )
export default CigaretteOff;
