import {tags} from 'ziko';
const {svg} = tags;
const ShipWheel = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"8"}),
	tags.path({"d":"M12 2v7.5"}),
	tags.path({"d":"m19 5-5.23 5.23"}),
	tags.path({"d":"M22 12h-7.5"}),
	tags.path({"d":"m19 19-5.23-5.23"}),
	tags.path({"d":"M12 14.5V22"}),
	tags.path({"d":"M10.23 13.77 5 19"}),
	tags.path({"d":"M9.5 12H2"}),
	tags.path({"d":"M10.23 10.23 5 5"}),
	tags.circle({"cx":"12","cy":"12","r":"2.5"})
    )
export default ShipWheel;
