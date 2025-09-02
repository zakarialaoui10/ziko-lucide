import {tags} from 'ziko';
const {svg} = tags;
const Haze = (props) => 
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
    tags.path({"d":"m5.2 6.2 1.4 1.4"}),
	tags.path({"d":"M2 13h2"}),
	tags.path({"d":"M20 13h2"}),
	tags.path({"d":"m17.4 7.6 1.4-1.4"}),
	tags.path({"d":"M22 17H2"}),
	tags.path({"d":"M22 21H2"}),
	tags.path({"d":"M16 13a4 4 0 0 0-8 0"}),
	tags.path({"d":"M12 5V2.5"})
    )
export default Haze;
