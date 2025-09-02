import {tags} from 'ziko';
const {svg} = tags;
const ChevronsLeftRightEllipsis = (props) => 
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
	tags.path({"d":"M16 12h.01"}),
	tags.path({"d":"m17 7 5 5-5 5"}),
	tags.path({"d":"m7 7-5 5 5 5"}),
	tags.path({"d":"M8 12h.01"})
    )
export default ChevronsLeftRightEllipsis;
