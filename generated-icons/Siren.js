import {tags} from 'ziko';
const {svg} = tags;
const Siren = (props) => 
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
    tags.path({"d":"M7 18v-6a5 5 0 1 1 10 0v6"}),
	tags.path({"d":"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}),
	tags.path({"d":"M21 12h1"}),
	tags.path({"d":"M18.5 4.5 18 5"}),
	tags.path({"d":"M2 12h1"}),
	tags.path({"d":"M12 2v1"}),
	tags.path({"d":"m4.929 4.929.707.707"}),
	tags.path({"d":"M12 12v6"})
    )
export default Siren;
