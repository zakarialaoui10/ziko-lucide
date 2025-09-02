import {tags} from 'ziko';
const {svg} = tags;
const SunMoon = (props) => 
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
    tags.path({"d":"M12 2v2"}),
	tags.path({"d":"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"}),
	tags.path({"d":"M16 12a4 4 0 0 0-4-4"}),
	tags.path({"d":"m19 5-1.256 1.256"}),
	tags.path({"d":"M20 12h2"})
    )
export default SunMoon;
