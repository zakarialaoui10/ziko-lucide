import {tags} from 'ziko';
const {svg} = tags;
const Loader = (props) => 
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
    tags.path({"d":"M12 2v4"}),
	tags.path({"d":"m16.2 7.8 2.9-2.9"}),
	tags.path({"d":"M18 12h4"}),
	tags.path({"d":"m16.2 16.2 2.9 2.9"}),
	tags.path({"d":"M12 18v4"}),
	tags.path({"d":"m4.9 19.1 2.9-2.9"}),
	tags.path({"d":"M2 12h4"}),
	tags.path({"d":"m4.9 4.9 2.9 2.9"})
    )
export default Loader;
