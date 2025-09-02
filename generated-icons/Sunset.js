import {tags} from 'ziko';
const {svg} = tags;
const Sunset = (props) => 
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
    tags.path({"d":"M12 10V2"}),
	tags.path({"d":"m4.93 10.93 1.41 1.41"}),
	tags.path({"d":"M2 18h2"}),
	tags.path({"d":"M20 18h2"}),
	tags.path({"d":"m19.07 10.93-1.41 1.41"}),
	tags.path({"d":"M22 22H2"}),
	tags.path({"d":"m16 6-4 4-4-4"}),
	tags.path({"d":"M16 18a4 4 0 0 0-8 0"})
    )
export default Sunset;
