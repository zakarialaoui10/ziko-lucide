import {tags} from 'ziko';
const {svg} = tags;
const CircleFadingPlus = (props) => 
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
    tags.path({"d":"M12 2a10 10 0 0 1 7.38 16.75"}),
	tags.path({"d":"M12 8v8"}),
	tags.path({"d":"M16 12H8"}),
	tags.path({"d":"M2.5 8.875a10 10 0 0 0-.5 3"}),
	tags.path({"d":"M2.83 16a10 10 0 0 0 2.43 3.4"}),
	tags.path({"d":"M4.636 5.235a10 10 0 0 1 .891-.857"}),
	tags.path({"d":"M8.644 21.42a10 10 0 0 0 7.631-.38"})
    )
export default CircleFadingPlus;
