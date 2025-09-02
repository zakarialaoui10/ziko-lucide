import {tags} from 'ziko';
const {svg} = tags;
const TurkishLira = (props) => 
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
    tags.path({"d":"M15 4 5 9"}),
	tags.path({"d":"m15 8.5-10 5"}),
	tags.path({"d":"M18 12a9 9 0 0 1-9 9V3"})
    )
export default TurkishLira;
