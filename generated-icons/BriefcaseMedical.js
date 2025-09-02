import {tags} from 'ziko';
const {svg} = tags;
const BriefcaseMedical = (props) => 
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
    tags.path({"d":"M12 11v4"}),
	tags.path({"d":"M14 13h-4"}),
	tags.path({"d":"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}),
	tags.path({"d":"M18 6v14"}),
	tags.path({"d":"M6 6v14"}),
	tags.rect({"width":"20","height":"14","x":"2","y":"6","rx":"2"})
    )
export default BriefcaseMedical;
