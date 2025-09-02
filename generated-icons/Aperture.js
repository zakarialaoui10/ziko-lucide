import {tags} from 'ziko';
const {svg} = tags;
const Aperture = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.path({"d":"m14.31 8 5.74 9.94"}),
	tags.path({"d":"M9.69 8h11.48"}),
	tags.path({"d":"m7.38 12 5.74-9.94"}),
	tags.path({"d":"M9.69 16 3.95 6.06"}),
	tags.path({"d":"M14.31 16H2.83"}),
	tags.path({"d":"m16.62 12-5.74 9.94"})
    )
export default Aperture;
