import {tags} from 'ziko';
const {svg} = tags;
const LightbulbOff = (props) => 
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
    tags.path({"d":"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}),
	tags.path({"d":"M9 18h6"}),
	tags.path({"d":"M10 22h4"})
    )
export default LightbulbOff;
