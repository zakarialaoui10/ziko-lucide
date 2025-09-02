import {tags} from 'ziko';
const {svg} = tags;
const ALargeSmall = (props) => 
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
    tags.path({"d":"m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16"}),
	tags.path({"d":"M15.697 14h5.606"}),
	tags.path({"d":"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}),
	tags.path({"d":"M3.304 13h6.392"})
    )
export default ALargeSmall;
