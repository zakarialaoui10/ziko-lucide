import {tags} from 'ziko';
const {svg} = tags;
const SunDim = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"4"}),
	tags.path({"d":"M12 4h.01"}),
	tags.path({"d":"M20 12h.01"}),
	tags.path({"d":"M12 20h.01"}),
	tags.path({"d":"M4 12h.01"}),
	tags.path({"d":"M17.657 6.343h.01"}),
	tags.path({"d":"M17.657 17.657h.01"}),
	tags.path({"d":"M6.343 17.657h.01"}),
	tags.path({"d":"M6.343 6.343h.01"})
    )
export default SunDim;
