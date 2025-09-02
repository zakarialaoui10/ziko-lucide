import {tags} from 'ziko';
const {svg} = tags;
const ThermometerSun = (props) => 
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
    tags.path({"d":"M12 9a4 4 0 0 0-2 7.5"}),
	tags.path({"d":"M12 3v2"}),
	tags.path({"d":"m6.6 18.4-1.4 1.4"}),
	tags.path({"d":"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}),
	tags.path({"d":"M4 13H2"}),
	tags.path({"d":"M6.34 7.34 4.93 5.93"})
    )
export default ThermometerSun;
