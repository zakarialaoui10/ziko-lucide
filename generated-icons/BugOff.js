import {tags} from 'ziko';
const {svg} = tags;
const BugOff = (props) => 
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
    tags.path({"d":"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}),
	tags.path({"d":"M14.12 3.88 16 2"}),
	tags.path({"d":"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}),
	tags.path({"d":"M20.97 5c0 2.1-1.6 3.8-3.5 4"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}),
	tags.path({"d":"M12 20v-8"}),
	tags.path({"d":"M6 13H2"}),
	tags.path({"d":"M3 21c0-2.1 1.7-3.9 3.8-4"})
    )
export default BugOff;
