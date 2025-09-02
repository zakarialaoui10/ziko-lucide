import {tags} from 'ziko';
const {svg} = tags;
const HeadphoneOff = (props) => 
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
    tags.path({"d":"M21 14h-1.343"}),
	tags.path({"d":"M9.128 3.47A9 9 0 0 1 21 12v3.343"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}),
	tags.path({"d":"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"})
    )
export default HeadphoneOff;
