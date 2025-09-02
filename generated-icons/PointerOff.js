import {tags} from 'ziko';
const {svg} = tags;
const PointerOff = (props) => 
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
    tags.path({"d":"M10 4.5V4a2 2 0 0 0-2.41-1.957"}),
	tags.path({"d":"M13.9 8.4a2 2 0 0 0-1.26-1.295"}),
	tags.path({"d":"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}),
	tags.path({"d":"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}),
	tags.path({"d":"M6 6v8"}),
	tags.path({"d":"m2 2 20 20"})
    )
export default PointerOff;
