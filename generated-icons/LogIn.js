import {tags} from 'ziko';
const {svg} = tags;
const LogIn = (props) => 
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
    tags.path({"d":"m10 17 5-5-5-5"}),
	tags.path({"d":"M15 12H3"}),
	tags.path({"d":"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"})
    )
export default LogIn;
