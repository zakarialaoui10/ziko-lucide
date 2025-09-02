import {tags} from 'ziko';
const {svg} = tags;
const Plug2 = (props) => 
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
    tags.path({"d":"M9 2v6"}),
	tags.path({"d":"M15 2v6"}),
	tags.path({"d":"M12 17v5"}),
	tags.path({"d":"M5 8h14"}),
	tags.path({"d":"M6 11V8h12v3a6 6 0 1 1-12 0Z"})
    )
export default Plug2;
