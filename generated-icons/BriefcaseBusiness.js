import {tags} from 'ziko';
const {svg} = tags;
const BriefcaseBusiness = (props) => 
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
    tags.path({"d":"M12 12h.01"}),
	tags.path({"d":"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}),
	tags.path({"d":"M22 13a18.15 18.15 0 0 1-20 0"}),
	tags.rect({"width":"20","height":"14","x":"2","y":"6","rx":"2"})
    )
export default BriefcaseBusiness;
