import {tags} from 'ziko';
const {svg} = tags;
const SignalMedium = (props) => 
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
    tags.path({"d":"M2 20h.01"}),
	tags.path({"d":"M7 20v-4"}),
	tags.path({"d":"M12 20v-8"})
    )
export default SignalMedium;
