import {tags} from 'ziko';
const {svg} = tags;
const AirVent = (props) => 
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
    tags.path({"d":"M18 17.5a2.5 2.5 0 1 1-4 2.03V12"}),
	tags.path({"d":"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),
	tags.path({"d":"M6 8h12"}),
	tags.path({"d":"M6.6 15.572A2 2 0 1 0 10 17v-5"})
    )
export default AirVent;
