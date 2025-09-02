import {tags} from 'ziko';
const {svg} = tags;
const Languages = (props) => 
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
    tags.path({"d":"m5 8 6 6"}),
	tags.path({"d":"m4 14 6-6 2-3"}),
	tags.path({"d":"M2 5h12"}),
	tags.path({"d":"M7 2h1"}),
	tags.path({"d":"m22 22-5-10-5 10"}),
	tags.path({"d":"M14 18h6"})
    )
export default Languages;
